import { Component } from '@angular/core';
import { Quiz } from '../../../models/quiz'; 
import { Category } from '../../../models/category'; 
import { QuizzesService } from '../../../services/quizzes.service'; 
import { CategoriesService } from '../../../services/categories.service'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './quizzes-dashboard.component.html'
})
export class QuizzesDashboardComponent {
  quizzes: Quiz[] = [];
  categories: Category[] = [];
  form: FormGroup;
  editing: Quiz | null = null;

  constructor(
    private quizService: QuizzesService,
    private categoryService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      category_id: [null]
    });
  }

  ngOnInit(): void {
    this.loadQuizzes();
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  loadQuizzes() {
    this.quizService.getAllQuizzes().subscribe(data => this.quizzes = data);
  }

  submit() {
    const quiz = this.form.value;

    if (this.editing) {
      this.quizService.update(this.editing.id, quiz).subscribe(() => {
        this.editing = null;
        this.form.reset();
        this.loadQuizzes();
      });
    } else {
      this.quizService.create(quiz).subscribe(() => {
        this.form.reset();
        this.loadQuizzes();
      });
    }
  }

  edit(quiz: Quiz) {
    this.editing = quiz;
    this.form.patchValue(quiz);
  }

  cancel() {
    this.editing = null;
    this.form.reset();
  }

  delete(quiz: Quiz) {
    if (confirm(`Delete quiz "${quiz.title}"?`)) {
      this.quizService.delete(quiz.id).subscribe(() => {
        this.loadQuizzes();
      });
    }
  }
}
