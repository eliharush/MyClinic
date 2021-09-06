import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MarketHeaderComponent } from './market-header/market-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [MarketHeaderComponent],
    imports: [IonicModule, CommonModule],
    exports: [MarketHeaderComponent]
})

export class ComponentsModule { }