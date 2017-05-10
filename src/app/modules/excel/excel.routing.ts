import { Routes, RouterModule } from '@angular/router';
import { ExcelContainer } from './containers/excel.container';

const routes: Routes = [
    {path: '', component: ExcelContainer},

];

export const ExcelRouting = RouterModule.forChild(routes);