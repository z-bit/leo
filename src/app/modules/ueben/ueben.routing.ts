import { Routes, RouterModule } from '@angular/router';
import { UebenContainer } from './containers/ueben.container';

const routes: Routes = [
    {path: '', component: UebenContainer},

];

export const UebenRouting = RouterModule.forChild(routes);