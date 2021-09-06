import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';


@Injectable({
    providedIn: 'root'
})

export class ApiPerfrencesService implements OnInit {

    public diets;

    public loading = false;
    public baseURL = "assets/json/"
    public isNetwork: boolean;
    public globalURL: string;
    public sendObj = { "User": { "Email": "leedorb@gmail.com" } }
    constructor(private http: HttpClient, public settings: GlobalService) {
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
    }


    ngOnInit() {

    }

    getDiets() {
        return new Promise(async (resolve, reject) => {
            try {
                if (await this.settings.checkIsNetwork())
                    await this.http.get(this.globalURL + '/Diets/get').subscribe(data => { 
                        console.log("ID : ", data); 
                        localStorage.setItem("diets",JSON.stringify(data));
                        resolve(data); });
                else
                    await this.http.get(this.baseURL + 'diets.json').subscribe(data => { console.log(data);
                        if(localStorage.getItem("diets")==null)
                        { console.log("setdatDietsLocally");
                            localStorage.setItem("diets",JSON.stringify(data));
                                     }
                        else{
                            data=JSON.parse(localStorage.getItem("diets"));
                            console.log("getdatDietsLocally",data);
                        }
                        resolve(data); });

            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }

    sendDietToServer(dietId,dietsObj) {
        return new Promise(async (resolve, reject) => {
            try {
                let ob = { "User": { "Email": "leedorb@gmail.com" }, "DietsUUID": [dietId] }
                if (await this.settings.checkIsNetwork())
                    await this.http.post(this.globalURL + '/PatientSettings/SetPatientDiets', ob).subscribe(data => { console.log("ID : ", data); resolve(data); });
                else
                {
                    console.log("setDietsssLocaly:",dietsObj);
                    localStorage.setItem("diets",JSON.stringify(dietsObj));
                } 

            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }
}