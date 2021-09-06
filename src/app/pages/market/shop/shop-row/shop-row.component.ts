import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-row',
  templateUrl: './shop-row.component.html',
  styleUrls: ['./shop-row.component.scss'],
})
export class ShopRowComponent implements OnInit {
  @Input() product;
  favorite: Array<object> = [];

  constructor() { }

  ngOnInit() { }

  changeFavorite() {
    this.product.selected = !this.product.selected;
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    try {
      this.favorite = JSON.parse(localStorage.favorite);
    } catch (err) {
      this.favorite = [];
    }

    const found = this.favorite.findIndex(element => element['UUID'] == this.product['UUID']);

    if (found >= 0)
      this.favorite.splice(found, 1)
    else
      this.favorite.push(this.product)

    localStorage.favorite = JSON.stringify(this.favorite);
  }

}
