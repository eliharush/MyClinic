import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-market-header',
    templateUrl: './market-header.component.html',
    styleUrls: ['./market-header.component.scss'],
})
export class MarketHeaderComponent implements OnInit {

    @Input() page;
    @Input() type;

    constructor(private router: Router) { }

    ngOnInit() { }

    changePage(num) {
        this.page['currentPage'] = num;

        if (num == 5) {
            this.page['currentPage'] = 1;
            this.router.navigateByUrl('/prefrences/1');
        }
    }

    goBack() {
        this.router.navigateByUrl('/tabs/network');
    }
}
