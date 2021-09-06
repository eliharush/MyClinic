import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  showMainPage: boolean = true
  constructor(public api: HomeService) {
    console.log("Contructor")
    api.showMainPage.subscribe(value => {
      this.showMainPage = value;
    });
  }

  ionViewWillEnter() {
    console.log("INIT2")
  }

  ionViewDidEnter() {
    console.log("INIT23")
    this.showMainPage = true;
  }

  ngOnInit() {
    console.log("INIT-of home page");
  }

  changePageStatus() {
    this.showMainPage = !this.showMainPage;
  }

}
