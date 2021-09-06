import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-row',
  templateUrl: './restaurant-row.component.html',
  styleUrls: ['./restaurant-row.component.scss'],
})
export class RestaurantRowComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() { }

}
