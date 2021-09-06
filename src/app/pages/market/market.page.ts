import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-market',
    templateUrl: './market.page.html',
    styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
    page: object = {
        currentPage: 1,
    }

    constructor(public activatedRoute: ActivatedRoute, private router: Router) {
        console.log("Init2")
    }

    ionViewDidEnter() {
        console.log("ID : ", this.activatedRoute.snapshot.paramMap.get('id'))
        if (!this.activatedRoute.snapshot.paramMap.get('id'))
            this.page['currentPage'] = 1;

        this.page['currentPage'] = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    }

    changePage() {
        this.router.navigateByUrl('/prefrences/1');
    }


    ionViewWillEnter() {
        console.log("INIT2Market")
    }


    ngOnInit() {
        console.log("Init")
    }

    changeCurrentPage(num) {
        console.log("P : ", num)
        this.page['currentPage'] = num;
    }

}
