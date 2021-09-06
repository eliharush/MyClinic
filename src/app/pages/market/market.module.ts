import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketPageRoutingModule } from './market-routing.module';

import { MarketPage } from './market.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IdeasComponent } from './ideas/ideas.component';
import { ShopComponent } from './shop/shop.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FavoritsComponent } from './favorits/favorits.component';
import { ShopRowComponent } from './shop/shop-row/shop-row.component';
import { RestaurantRowComponent } from './restaurant/restaurant-row/restaurant-row.component';
import { CardComponent } from './ideas/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MarketPage,CardComponent, IdeasComponent, ShopComponent, RestaurantComponent, FavoritsComponent, ShopRowComponent, RestaurantRowComponent]
})
export class MarketPageModule { }
