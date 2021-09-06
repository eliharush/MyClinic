import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydayPageRoutingModule } from './myday-routing.module';

import { MydayPage } from './myday.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MdRowComponent } from './md-row/md-row.component';
import { SelectedMealComponent } from './selected-meal/selected-meal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydayPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MydayPage, MdRowComponent, SelectedMealComponent]
})
export class MydayPageModule { }
