import { Injectable } from '@angular/core';
import { PRODUCTS } from './mocks/products/mock-product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products = PRODUCTS;

  constructor() { }

  getProducts(): Observable <any[]> {
    return of(this.products);
  }
}
