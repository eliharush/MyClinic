import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkDetailsPage } from './network-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: NetworkDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class NetworkDetailsPageRoutingModule {}
