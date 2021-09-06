import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NetworkDetailsPageRoutingModule } from './network-details-routing.module';

import { NetworkDetailsPage } from './network-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NetworkDetailsPageRoutingModule,
        ComponentsModule
    ],
    declarations: [NetworkDetailsPage]
})
export class NetworkDetailsPageModule { }
