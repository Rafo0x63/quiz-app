import { Component } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';
import { SlugifyPipe } from "../../pipes/slugify.pipe";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-quizzes-list',
  imports: [CommonModule, RouterLink, SlugifyPipe],
  templateUrl: './quizzes-list.component.html',
  styleUrl: './quizzes-list.component.css'
})
export class QuizzesListComponent {
  quizzes: Quiz[] = []

  constructor(private quizzesService: QuizzesService) {}

  ngOnInit() {
    this.quizzesService.getAllQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data
      },
      error: (err) => console.error('Error loading quizzes', err)
    })
  }
}
