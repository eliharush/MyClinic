import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefrencesPage } from './prefrences.page';

const routes: Routes = [
  {
    path: '',
    component: PrefrencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefrencesPageRoutingModule {}
