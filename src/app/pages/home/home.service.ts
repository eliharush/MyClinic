import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HomeService implements OnInit {

    showMainPage = new BehaviorSubject(false);

    constructor(private http: HttpClient) { }


    ngOnInit() {

    }
}