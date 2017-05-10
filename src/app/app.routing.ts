import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './containers/home.container';

import { EccnetHome } from './modules/eccnet/eccnet.home';
import { eccnetRoutes } from './modules/eccnet/eccnet.routes';




const routes: Routes = [
    // instant loading
    { path: '', component: HomeContainer },
    { path: 'eccnet', component: EccnetHome, children: eccnetRoutes},
    
    //lazy loading
    {path: 'excel', loadChildren: './modules/excel/excel.module#ExcelModule'},
    {path: 'inventur', loadChildren: './modules/inventur/inventur.module#InventurModule'},
    {path: 'ueben', loadChildren: './modules/ueben/ueben.module#UebenModule'},
    
    // just in case
    { path: '**', component: HomeContainer }
];

export const AppRouting = RouterModule.forRoot(routes);
