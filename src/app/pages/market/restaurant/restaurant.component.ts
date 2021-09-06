import { Component, OnInit } from '@angular/core';
import { ApiMarketService } from '../api.marketService';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  products: any = [];

  constructor(public api: ApiMarketService) {
    this.getProductsFromServer();
  }

  ngOnInit() { }

  async getProductsFromServer() {
    this.products = await this.api.getRestaurantProduct();
  }

}
