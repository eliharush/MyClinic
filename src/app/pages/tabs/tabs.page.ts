import { Component } from '@angular/core';
import { MyDayService } from '../myday/myday-api';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  currentTab = 0;

  constructor(public api: MyDayService, public homeService: HomeService) {

  }

  selectedTab(tab) {
    this.currentTab = tab;
    if (this.currentTab == 0)
      this.homeService.showMainPage.next(true)
    if (this.currentTab == 3)
      this.api.selectedMeal.next(false)
    console.log(this.currentTab)
  }

}
