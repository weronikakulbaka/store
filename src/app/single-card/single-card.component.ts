import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
   console.log(this.product)
  }

}
