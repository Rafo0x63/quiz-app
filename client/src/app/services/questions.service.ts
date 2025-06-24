import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private api = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getQuestionsByQuiz(category: String, quiz: String) {
    return this.http.get<any[]>(`${this.api}/questions/${category}/${quiz}`)
  }
}
