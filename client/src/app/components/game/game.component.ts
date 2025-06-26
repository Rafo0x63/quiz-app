import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../../models/question';
import { Quiz } from '../../models/quiz';
import { UnslugifyPipe } from "../../pipes/unslugify.pipe";

@Component({
  selector: 'app-game',
  imports: [CommonModule, UnslugifyPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  questions: Question[] = []
  categoryTitle!: string
  quizTitle!: string
  selectedAnswer: string | null = null
  currentQuestionIdx: number = 0
  correctAnswers: number = 0
  isFinalQuestion: boolean = false
  currentQuiz!: Quiz
  currentQuestion!: Question
  quizFinished: boolean = false

  constructor(private questionsService: QuestionsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.categoryTitle = this.route.snapshot.paramMap.get('categoryTitle')!
    this.quizTitle = this.route.snapshot.paramMap.get('quizTitle')!
    this.questionsService.getQuestionsByQuiz(this.categoryTitle, this.quizTitle).subscribe({
      next: (data) => { 
        this.questions = data.questions
        this.currentQuiz = data.quiz
        this.currentQuestion = this.questions[this.currentQuestionIdx]
      },
      error: (err) => console.error("Error loading questions", err)
    })
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer
  }

  nextQuestion() {
    this.currentQuestion = this.questions[this.currentQuestionIdx]
    if(this.currentQuestion.correct_answer == this.selectedAnswer) this.correctAnswers++
    
    if (this.currentQuestionIdx === this.currentQuiz.questions.length - 2) this.isFinalQuestion = true
    
    this.selectedAnswer = null
    this.currentQuestionIdx++
  }
  
  finishQuiz() {
    this.currentQuestion = this.questions[this.currentQuestionIdx]
    if (this.selectedAnswer == this.currentQuestion.correct_answer) this.correctAnswers++
    
    this.quizFinished = true
  }
}
