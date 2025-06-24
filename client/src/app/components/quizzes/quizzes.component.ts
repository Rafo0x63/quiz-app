import { Component } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from "../../pipes/slugify.pipe";

@Component({
  selector: 'app-quizzes',
  imports: [CommonModule, RouterLink, SlugifyPipe],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {
  quizzes: any[] = []
  categoryTitle!: string

  constructor(private quizzesService: QuizzesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryTitle = this.route.snapshot.paramMap.get('categoryTitle')!
    this.quizzesService.getQuizzesByCategory(this.categoryTitle).subscribe({
      next: (data) => this.quizzes = data,
      error: (err) => console.error('Error loading quizzes', err)
    })
  }
}
