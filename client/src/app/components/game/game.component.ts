import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  questions: any[] = []
  categoryTitle!: string
  quizTitle!: string

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryTitle = this.route.snapshot.paramMap.get('categoryTitle')!
    this.quizTitle = this.route.snapshot.paramMap.get('quizTitle')!
    this.questionsService.getQuestionsByQuiz(this.categoryTitle, this.quizTitle).subscribe({
      next: (data) => this.questions = data,
      error: (err) => console.error("Error loading questions", err)
    })
  }
}
