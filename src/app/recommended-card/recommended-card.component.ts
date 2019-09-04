import {
  Component,
  OnInit
} from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';



@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrls: ['./recommended-card.component.css']
})
export class RecommendedCardComponent implements OnInit {

  products;
  productsOnSale = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(res => 
    {
      this.products = res;
      this.productsOnSale = this.products.filter(item => item.IsOnSale === 1);
    });
  }

}
