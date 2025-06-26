import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private api = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getQuestionsByQuiz(category: String, quiz: String): Observable<{quiz: Quiz, questions: Question[]}> {
    return this.http.get<{quiz: Quiz, questions: Question[]}>(`${this.api}/questions/${category}/${quiz}`)
  }
}
