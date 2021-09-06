import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  public loading = false;
  public baseURL = "assets/json/"
  public isNetwork: boolean;
  public globalURL: string;
  public sendObj = { "User": { "Email": "leedorb@gmail.com" } }

  constructor(private http: HttpClient, public settings: GlobalService) {
    this.isNetwork = this.settings.isNetwork;
    this.globalURL = this.settings.globalURL;
  }


  getPatientDetails() {
    return new Promise(async (resolve, reject) => {
      try {
        let ob = { "User": { "Email": "leedorb@gmail.com", "Name": "", "LastName": "", "BirthDate": "" } }
        if (await this.settings.checkIsNetwork())
          await this.http.post(this.globalURL + '/PatientSettings/get', ob).subscribe(data => { console.log("ID : ", data); resolve(data); });
        else
          await this.http.get(this.baseURL + 'patient.json').subscribe(data => { console.log(data); resolve(data); });

      } catch (err) {
        await this.http.get(this.baseURL + 'patient.json').subscribe(data => { console.log(data); resolve(data); });
        console.log(err);
      } finally {
      }
    });
  }
}
