import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ApiIndexService implements OnInit {

    public loading = false;
    public baseURL = "assets/json/"
    constructor(private http: HttpClient) { }


    ngOnInit() {

    }

    getIndex() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.http.get(this.baseURL + 'index.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

}