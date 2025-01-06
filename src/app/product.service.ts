import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = "http://localhost:8080/inventory-app/products";

  constructor(private httpClient: HttpClient) { }

  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase);
  }

  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(this.urlBase, product);
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(`${this.urlBase}/${id}`);
  }

  editProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this.urlBase}/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.urlBase}/${id}`);
  }
}
