import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../interfaces/product.model';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators'
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://ec2-34-203-75-254.compute-1.amazonaws.com:10003/product/';

  constructor(private http: HttpClient) { }

  // CREATE
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product); // http://localhost:8989/product
  }

  // READ
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl); // http://localhost:8989/product
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + id); // http://localhost:8989/product/{id}
  }

  // UPDATE
  public updateProduct(product: Product) {
    return this.http.put<Product>(this.baseUrl, product); // http://localhost:8989/product
  }

  // DELETE
  deleteProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + id); // http://localhost:8989/product/{id}
  }
}
