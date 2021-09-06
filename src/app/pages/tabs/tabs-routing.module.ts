import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../home/home.module').then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'market/:id',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../market/market.module').then(m => m.MarketPageModule)
                    }
                ]
            },
            {
                path: 'myday',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../myday/myday.module').then(m => m.MydayPageModule)
                    }
                ]
            }, {
                path: 'network',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../network/network.module').then(m => m.NetworkPageModule)
                    }
                ]
            }, {
                path: 'index',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../index/index.module').then(m => m.IndexPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }

