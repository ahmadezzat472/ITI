import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Category } from '../interface/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly base_URL = `${environment.apiUrl}/categories`;
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient.get<Category[]>(this.base_URL);
  }
  getCategory(id: number) {
    return this.httpClient.get<Category>(`${this.base_URL}/${id}`);
  }
  updateCategory(id: number, category: Category) {
    return this.httpClient.put(`${this.base_URL}/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete(`${this.base_URL}/${id}`);
  }
}
