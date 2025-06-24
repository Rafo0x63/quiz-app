import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: any[] = []

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data
    })
  }
}
