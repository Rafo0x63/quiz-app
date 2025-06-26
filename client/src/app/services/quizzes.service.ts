import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  private api = "http://localhost:3000/api/quizzes"

  constructor(private http: HttpClient) { }

  getQuizzesByCategory(title: String) {
    return this.http.get<any[]>(`${this.api}/${title}`)
  }

  getAllQuizzes() {
    return this.http.get<Quiz[]>(`${this.api}`)
  }

  create(quiz: Partial<Quiz>): Observable<Quiz> {
    return this.http.post<Quiz>(this.api, quiz);
  }

  update(id: number, quiz: Partial<Quiz>): Observable<Quiz> {
    return this.http.put<Quiz>(`${this.api}/${id}`, quiz);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}