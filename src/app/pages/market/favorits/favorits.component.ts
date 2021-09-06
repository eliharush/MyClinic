import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.scss'],
})
export class FavoritsComponent implements OnInit {

  height: number = window.innerHeight - 100;
  favorite: Array<object> = [];
  constructor() {
    try {
      this.favorite = JSON.parse(localStorage.favorite);
    } catch (err) {
      this.favorite = [];
    }
  }

  ngOnInit() { }

}
