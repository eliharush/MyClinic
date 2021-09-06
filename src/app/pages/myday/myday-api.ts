import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { ApiPerfrencesService } from '../prefrences/api.perfrencesService';


@Injectable({
    providedIn: 'root'
})

export class MyDayService implements OnInit {

    selectedMeal = new BehaviorSubject(false);
    selectedMealRefresh = new BehaviorSubject(false);
    public loading = false;
    public baseURL = "assets/json/"
    public isNetwork: boolean;
    public globalURL: string;
    public diets;
    public sendObj = { "User": { "Email": "leedorb@gmail.com" } }


    constructor(private http: HttpClient, public settings: GlobalService, public api: ApiPerfrencesService) {
        this.isNetwork = this.settings.isNetwork;
        this.globalURL = this.settings.globalURL;
   
        
    }


    ngOnInit() {
        console.log("InitOfMyDay");
        this.diets = this.api.getDiets();
    }

    getMyDayProduct() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.http.get(this.baseURL + 'myDay.json').subscribe(data => { console.log(data); resolve(data); });
            } catch (err) {
                console.log(err);
            } finally {
            }
        });
    }
    randomize(min, max) {
        console.log("minimo: " + min);
        console.log("maximo: " + max);
    
        let x=0;
    
        console.log(Math.floor(Math.random()*(max-min+1)+min));
        console.log(x = Math.floor(Math.random()*(max-min+1)+min));
        return x;
    }
    
    getMeals() {
        return new Promise(async (resolve, reject) => {
            try {
             
                if (await this.settings.checkIsNetwork())
                    await this.http.post(this.globalURL + 'UserMenu/GetDailyMenu', this.sendObj).subscribe(data => { console.log("GetDailyMenu : ", data); resolve(data); });
                else
                {
                    //Random(1-5)
                    //get relevant menu
                   
                   
                      
                    let randomX=this.randomize(1,5);
                    console.log( randomX);
                    this.diets = await this.api.getDiets();
                    let diet="";
                    for (let index in  this.diets) {
                       
                        if(this.diets[index]['selected']=="true")
                        {
                            diet=this.diets[index]['Name'];
                            console.log("dietll",diet);
                        }
                       
                      }
                      let randomPath=this.baseURL + diet+'/'+randomX+'.json';
                      console.log("randomPath",randomPath);
                    await this.http.get(randomPath).subscribe(data => { console.log(data); resolve(data); });
                }
            } catch (err) {
                await this.http.get(this.baseURL + 'GetDailyMenu.json').subscribe(data => { console.log(data); resolve(data); });
                console.log(err);
            } finally {
            }
        });
    }

}