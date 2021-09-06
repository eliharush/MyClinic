import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefrencesPageRoutingModule } from './prefrences-routing.module';

import { PrefrencesPage } from './prefrences.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefrencesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrefrencesPage]
})
export class PrefrencesPageModule { }
