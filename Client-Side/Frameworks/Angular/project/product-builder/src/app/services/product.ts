import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { CreateProductDto, Product, UpdateProductDto } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly base_URL = `${environment.apiUrl}/products`;
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>(this.base_URL);
  }
  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.base_URL}/${id}`);
  }
  createProduct(product: CreateProductDto) {
    return this.httpClient.post<Product>(`${this.base_URL}`, product);
  }
  updateProduct(id: number, product: UpdateProductDto) {
    return this.httpClient.put(`${this.base_URL}/${id}`, product);
  }
  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.base_URL}/${id}`);
  }
}
