import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-dashboard',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './categories-dashboard.component.html',
  styleUrl: './categories-dashboard.component.css'
})
export class CategoriesDashboardComponent {
  categories: Category[] = [];
  form: FormGroup;
  editing: Category | null = null;

  constructor(
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  submit() {
    const title = this.form.value.title;

    if (this.editing) {
      this.categoryService.update(this.editing.id, { title }).subscribe(() => {
        this.editing = null;
        this.form.reset();
        this.loadCategories();
      });
    } else {
      this.categoryService.create({ title }).subscribe(() => {
        this.form.reset();
        this.loadCategories();
      });
    }
  }

  edit(category: Category) {
    this.editing = category;
    this.form.patchValue({ title: category.title });
  }

  cancel() {
    this.editing = null;
    this.form.reset();
  }

  delete(category: Category) {
    if (confirm(`Delete category "${category.title}"?`)) {
      this.categoryService.delete(category.id).subscribe(() => {
        this.loadCategories();
      });
    }
  }
}
