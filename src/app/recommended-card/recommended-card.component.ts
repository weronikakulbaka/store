import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrls: ['./recommended-card.component.css']
})
export class RecommendedCardComponent implements OnInit {

  products;
  sales;
  productsOnSale = [];
  product;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = this.dataService.getProducts();
    this.products.subscribe(products => {
      this.products = products;
    });
    this.sales = this.dataService.getSales();
    this.sales.subscribe(sales => {
      this.sales = sales;
    });

    this.products.filter(product => {
      for (let sale of this.sales) {
        if (sale.productId === product.id) {
          console.log(sale);
          this.productsOnSale.push(product);
        }
      }
    });

  }

}
