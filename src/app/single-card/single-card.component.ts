import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {

  @Input() product;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   console.log(this.product)
  }

}
