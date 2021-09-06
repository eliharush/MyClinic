import { Component, OnInit } from '@angular/core';
import { ApiPerfrencesService } from './api.perfrencesService';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-prefrences',
    templateUrl: './prefrences.page.html',
    styleUrls: ['./prefrences.page.scss'],
})
export class PrefrencesPage implements OnInit {
    insertPageId = 0;
    diets: any;
    dietSelected: number = 0;
    

    meals = [{
        name: 'Breakfast',
        selected: false,
    }, {
        name: 'Branch',
        selected: false,
    }, {
        name: 'Lunch',
        selected: false,
    }, {
        name: 'Supper',
        selected: false,
    }, {
        name: 'Night',
        selected: false,
    }]



    constructor(public api: ApiPerfrencesService, public activatedRoute: ActivatedRoute) {
        if (localStorage.meals)
            this.meals = JSON.parse(localStorage.meals)

        this.insertPageId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
        this.getDietsFromServer();
    }

    async getDietsFromServer() {
        this.diets = await this.api.getDiets();
        console.log("DIETS : ", this.diets)
        console.log("XXX",this.diets[this.dietSelected]['Name']);
    }

  async   ngOnInit() {
        this.diets =  await this.api.getDiets();
        console.log("sss"+ this.diets)
        for (let  index in  this.diets) {
            
               if  (this.diets[index]['selected']=="true")  {  
               this.dietSelected=parseInt(index);
               console.log("selxceteID=" ,this.dietSelected);
               }
               
        }
    }
    

    async cbChange() {
        localStorage.meals = JSON.stringify(this.meals)
        console.log("meals"+ localStorage.meals);
        console.log("DDD : ", this.diets, this.dietSelected);
       //init diets 
        for (let  index in  this.diets) {
                       
            this.diets[index]['selected']="false";
        }
        this.diets[this.dietSelected]['selected']="true";
        let ans = await this.api.sendDietToServer(this.diets[this.dietSelected]['UUID'],this.diets);
    }

}
