import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductData: Product
  list: Product[]

  readonly rootURL = "https://localhost:44328/api"

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.rootURL + '/Product').toPromise();
  }

}
