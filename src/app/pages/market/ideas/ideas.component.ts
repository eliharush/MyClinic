import { Component, OnInit } from '@angular/core';
import { ApiMarketService } from '../api.marketService';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent implements OnInit {
  products: any = [];
  arrLeft: any = [];
  arrRight: any = [];

  constructor(public api: ApiMarketService) {
    this.getProductsFromServer();
  }

  ngOnInit() { }

  async getProductsFromServer() {
    this.products = await this.api.getIdeasProduct();

    for (let i = 0; i < this.products.length; i++) {
      if (i < this.products.length / 2)
        this.arrLeft.push(this.products[i])
      else
        this.arrRight.push(this.products[i])
    }
    console.log("Ideas : ", this.products)
  }
}
