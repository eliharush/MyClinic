import { Component, OnInit } from '@angular/core';
import { MyDayService } from './myday-api';

@Component({
    selector: 'app-myday',
    templateUrl: './myday.page.html',
    styleUrls: ['./myday.page.scss'],
})
export class MydayPage implements OnInit {
    products: any = [];
    strips: Array<string> = ["strip1.png", "strip2.png", "strip3.png"];
    selectedMeal: boolean = false;
    refreshSelectedMeal: object = {
        refresh: false
    }

    constructor(public api: MyDayService) {
        console.log("Init1")
        api.selectedMeal.subscribe(value => {
            this.selectedMeal = value;
        });
        this.getProductsFromServer();
    }

    ionViewWillEnter() {
        console.log("INIT2")
        this.selectedMeal = false;
    }

    ionViewDidEnter() {
        console.log("INIT23")
        this.selectedMeal = false;
    }

    ngOnInit() {
        console.log("Init")
        this.selectedMeal = false;
    }

    async getProductsFromServer() {
        this.products = await this.api.getMyDayProduct();
        console.log("products : ", this.products)
    }

    openCloseMealPage(item?) {
        console.log("openMealPage : ", item)
        if ((item && item['type'] == "Meal") || !item)
            this.selectedMeal = !this.selectedMeal;
    }

    refreshMeal() {
        this.api.selectedMealRefresh.next(true);
        console.log("R2");
    }

    ionSelected() {
        console.log("Home Page has been selected");
        // do your stuff here
    }

    goToPrefrences() {

    }

    changeSelectedMeal(){
        this.selectedMeal = !this.selectedMeal;
    }
}
