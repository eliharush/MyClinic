import { Component, OnInit } from '@angular/core';
import { ApiMarketService } from '../api.marketService';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  favorite: Array<object> = [];


  constructor(public api: ApiMarketService) {
    this.getProductsFromServer();

    try {
      this.favorite = JSON.parse(localStorage.favorite);
    } catch (err) {
      this.favorite = [];
    }
  }

  ngOnInit() { }

  async getProductsFromServer() {
    this.products = await this.api.getShopProduct();
    this.products.map(item => {
      const found = this.favorite.findIndex(element => element['UUID'] == item['UUID']);

      if (found >= 0)
        return item.selected = true;
      else
        return item.selected = false;
    })
    console.log("products : ", this.products)
  }
}
