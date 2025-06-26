import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private api = "http://localhost:3000/api/questions"

  constructor(private http: HttpClient) { }

  getQuestionsByQuiz(category: String, quiz: String): Observable<{quiz: Quiz, questions: Question[]}> {
    return this.http.get<{quiz: Quiz, questions: Question[]}>(`${this.api}/${category}/${quiz}`)
  }

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.api);
  }

  create(question: Partial<Question>): Observable<Question> {
    return this.http.post<Question>(this.api, question);
  }

  update(id: number, question: Partial<Question>): Observable<Question> {
    return this.http.put<Question>(`${this.api}/${id}`, question);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
