import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recommended-card',
  templateUrl: './recommended-card.component.html',
  styleUrls: ['./recommended-card.component.css']
})
export class RecommendedCardComponent implements OnInit {

  products;
  product;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getProducts();
    this.products.subscribe( products => {
      this.products = products;
    });
  }

}
