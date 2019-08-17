import { Injectable } from '@angular/core';
import { PRODUCTS } from './mocks/products/mock-product';
import { SALES } from './mocks/sale/mock-sale';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products = PRODUCTS;
  sales = SALES

  constructor() { }

  getProducts(): Observable <any[]> {
    return of(this.products);
  }

  getSales(): Observable <any[]> {
    return of(this.sales);
  }
}
