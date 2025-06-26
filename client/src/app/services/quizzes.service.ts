import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  private api = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getQuizzesByCategory(title: String) {
    return this.http.get<any[]>(`${this.api}/quizzes/${title}`)
  }

  getAllQuizzes() {
    return this.http.get<Quiz[]>(`${this.api}/quizzes`)
  }
}