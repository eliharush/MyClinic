import { Component, OnInit } from '@angular/core';
import { ApiIndexService } from './api.IndexService';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  active = 0;
  mainIndex: any = [];

  constructor(public api: ApiIndexService) {
    this.getMainIndex()
  }

  async getMainIndex() {
    this.mainIndex = await this.api.getIndex();
    console.log("MainIndex : ", this.mainIndex)
  }

  ngOnInit() {
  }

  changeToogle(nm) {
    this.active = nm;
  }

}
