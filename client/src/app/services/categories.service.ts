import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private api = "http://localhost:3000/api"

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(`${this.api}/categories`)
  }
}
