import { Routes, RouterModule } from '@angular/router';
import { InventurContainer } from './containers/inventur.container';

const routes: Routes = [
    {path: '', component: InventurContainer},
    
];

export const InventurRouting = RouterModule.forChild(routes);