import { Product } from './../inventory/class/product/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  baseUrl: string = 'http://localhost:8989/';

  constructor(private http: HttpClient) { }

  // CREATE
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'product', product); // http://localhost:8989/product
  }

  // READ
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product'); // http://localhost:8989/product
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'product/' + id); // http://localhost:8989/product/{id}
  }

  // UPDATE
  public updateProduct(product: Product) {
    return this.http.put<Product>(this.baseUrl + 'product', product); // http://localhost:8989/product
  }

  // DELETE
  deleteProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + 'product/' + id); // http://localhost:8989/product/{id}
  }
}
