
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'prefrences/:id',
        loadChildren: () => import('./pages/prefrences/prefrences.module').then(m => m.PrefrencesPageModule)
    },
    {
        path: 'user-details',
        loadChildren: () => import('./pages/user-details/user-details.module').then(m => m.UserDetailsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
  {
    path: 'network-details',
    loadChildren: () => import('./pages/network-details/network-details.module').then( m => m.NetworkDetailsPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
//   },
//   {
//     path: 'tab1',
//     loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
//   },
//   {
//     path: 'tab2',
//     loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
//   },
//   {
//     path: 'tab3',
//     loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
//   },
//   {
//     path: 'tab4',
//     loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
//   },
//   {
//     path: 'tab5',
//     loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
//   },
//   {
//     path: 'market',
//     loadChildren: () => import('./market/market.module').then(m => m.MarketPageModule)
//   },
//   {
//     path: 'myday',
//     loadChildren: () => import('./myday/myday.module').then(m => m.MydayPageModule)
//   },
//   {
//     path: 'network',
//     loadChildren: () => import('./network/network.module').then(m => m.NetworkPageModule)
//   }

// ];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
