import { Injectable, Inject } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductData: Product
  list: Product[]

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(environment.rootURL + '/Product');
  }

}
