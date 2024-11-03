import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  getAll() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductDetail(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
