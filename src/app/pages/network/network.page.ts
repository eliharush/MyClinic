import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  patientDetails = {};
  info: Array<string> = ['BChat', 'Treatment Goals', 'Tasks and Recommendations', 'Food and Products', 'Inforsheets and Links', 'Supplements and Herbs ']

  constructor(public api: NetworkService) {
    this.getPatientDetails()
  }

  async getPatientDetails() {
    this.patientDetails = await this.api.getPatientDetails()
    console.log("pa : ", this.patientDetails, this.patientDetails['Pesonal_ID'])
  }

  ngOnInit() {
  }

  call() {
    window.location.href = "tel:+" + this.patientDetails['Pesonal_ID'];
  }

}
