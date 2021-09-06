import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkService } from '../network/network.service';

@Component({
    selector: 'app-network-details',
    templateUrl: './network-details.page.html',
    styleUrls: ['./network-details.page.scss'],
})
export class NetworkDetailsPage implements OnInit {
    info: Array<string> = ['BChat', 'Treatment Goals', 'Tasks and Recommendations', 'Food and Products', 'Inforsheets and Links', 'Supplements and Herbs ']
    patientDetails = {};

    constructor(private router: Router, public api: NetworkService) {
        this.getPatientDetails()
    }

    async getPatientDetails() {
        this.patientDetails = await this.api.getPatientDetails()
        console.log("pa : ", this.patientDetails, this.patientDetails['Pesonal_ID'])
    }

    ngOnInit() {
    }

    goback() {
        this.router.navigateByUrl('/tabs/network');
    }

    call() {
        window.location.href = "tel:+" + this.patientDetails['Pesonal_ID'];
    }

}
