import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private api = "http://localhost:3000/api/categories"

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(`${this.api}`)
  }

  create(category: Partial<Category>): Observable<Category> {
    return this.http.post<Category>(this.api, category);
  }

  update(id: number, category: Partial<Category>): Observable<Category> {
    return this.http.put<Category>(`${this.api}/${id}`, category);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}
