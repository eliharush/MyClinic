import { Component, OnInit, Input } from '@angular/core';
import { MyDayService } from '../myday-api';

@Component({
  selector: 'app-selected-meal',
  templateUrl: './selected-meal.component.html',
  styleUrls: ['./selected-meal.component.scss'],
})
export class SelectedMealComponent implements OnInit {
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 3,
  
    loop: false,
    centeredSlides: false
  };

  @Input() refreshSelectedMeal;
  slide1: Array<object> = []
  slide2: Array<object> = []
  slide3: Array<object> = []
  meals: any;
  mealsObj = {
    Breakfest: {},
    Lunch: {},
    Dinner: {}
  }


  sliderTwo = {
    isBeginningSlide: true,
    isEndSlide: false,
    slidesItems: [

    ]
  }

  constructor(public api: MyDayService) {
    console.log("Constructor")
    api.selectedMealRefresh.subscribe(value => {
      this.getMeals();
    });

    this.getMeals()
  }

  async getMeals() {
    this.meals = await this.api.getMeals();

    this.meals.map(
      ob => {
        if (ob['MealType'] == 10)
          this.mealsObj.Breakfest = ob;
        if (ob['MealType'] == 20)
          this.mealsObj.Lunch = ob;
        if (ob['MealType'] == 30)
          this.mealsObj.Dinner = ob;
      })

    console.log("MMeals ", this.meals, this.mealsObj);
  }


  ngOnInit() {
    console.log("Init")
    if (this.refreshSelectedMeal['refresh'] == true)
      this.refreshSelectedMeal['refresh'] = false;
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }

  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
