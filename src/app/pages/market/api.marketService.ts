import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';


@Injectable({
    providedIn: 'root'
})

export class ApiMarketService implements OnInit {

    public loading = false;
    public isNetwork: boolean;
    public globalURL: string;
    public sendObj = { "User": { "Email": "leedorb@gmail.com" } }

    constructor(public settings: GlobalService, private http: HttpClient) {
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }

    ngOnInit() {
        this.getShopProduct()
    }

    getShopProduct() {
        return new Promise(async (resolve, reject) => {

            try {
                await this.http.get('assets/json/shop.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

    getRestaurantProduct() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.http.get('assets/json/restaurant.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

    getIdeasProduct() {
        return new Promise(async (resolve, reject) => {
            try {
                if (await this.settings.checkIsNetwork())
                    await this.http.post(this.globalURL + 'UserMenu/GetUserMarketOptions', this.sendObj).subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                    await this.http.get('assets/json/ideas.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                await this.http.get('assets/json/ideas.json').subscribe(data => { console.log(data); resolve(data); });
                console.log(err);
            } finally {
            }
        });
    }
}