import { Component } from '@angular/core';
import { Question } from '../../../models/question';
import { Quiz } from '../../../models/quiz';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionsService } from '../../../services/questions.service';
import { QuizzesService } from '../../../services/quizzes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-dashboard',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './questions-dashboard.component.html',
  styleUrl: './questions-dashboard.component.css'
})
export class QuestionsDashboardComponent {
  questions: Question[] = [];
  quizzes: Quiz[] = [];
  form: FormGroup;
  editing: Question | null = null;
  options: string[] = [];
  groupedQuestions: { quizTitle: string; questions: Question[] }[] = []

  constructor(
    private questionService: QuestionsService,
    private quizService: QuizzesService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      question: ['', Validators.required],
      correct_answer: ['', Validators.required],
      quiz_id: [null, Validators.required],
      optionInput: ['']
    });
  }

  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe({
      next: (data) => {
        this.quizzes = data
        this.loadQuestions();
      }
    });
  }

  loadQuestions() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data.map(q => ({
        ...q,
        options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options
      }));
      this.groupedQuestions = this.groupByQuiz(this.questions)
    });
  }

  groupByQuiz(questions: Question[]): { quizTitle: string; questions: Question[] }[] {
  const map = new Map<number, Question[]>();

  for (const question of questions) {
    if (!question.quiz_id) continue;
    if (!map.has(question.quiz_id)) {
      map.set(question.quiz_id, []);
    }
    map.get(question.quiz_id)!.push(question);
  }

  return Array.from(map.entries()).map(([quizId, questions]) => ({
    quizTitle: this.getQuizTitle(quizId),
    questions
  })).sort((a, b) => a.quizTitle.localeCompare(b.quizTitle));
}

  addOption() {
    const option = this.form.get('optionInput')?.value.trim();
    if (option) {
      this.options.push(option);
      this.form.get('optionInput')?.reset();
    }
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
  }

  submit() {
    const questionPayload: Partial<Question> = {
      ...this.form.value,
      options: this.options
    };

    if (this.editing) {
      this.questionService.update(this.editing.id, questionPayload).subscribe(() => {
        this.resetForm();
        this.loadQuestions();
      });
    } else {
      this.questionService.create(questionPayload).subscribe(() => {
        this.resetForm();
        this.loadQuestions();
      });
    }
  }

  edit(q: Question) {
    this.editing = q;
    this.options = [...(q.options || [])];
    this.form.patchValue({
      question: q.question,
      correct_answer: q.correct_answer,
      quiz_id: q.quiz_id
    });
  }

  cancel() {
    this.resetForm();
  }

  resetForm() {
    this.editing = null;
    this.form.reset();
    this.options = [];
  }

  delete(q: Question) {
    if (confirm(`Delete question "${q.question}"?`)) {
      this.questionService.delete(q.id).subscribe(() => {
        this.loadQuestions()
      });
    }
  }

  getQuizTitle(id?: number): string {
    return this.quizzes.find(q => q.id === id)?.title || 'Unknown';
  }
}
