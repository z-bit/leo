import { Routes, RouterModule } from '@angular/router';
import { HomeContainer } from './containers/home.container';

const routes: Routes = [
    { path: '', component: HomeContainer },

    { path: '**', component: HomeContainer }
];

export const AppRouting = RouterModule.forRoot(routes);
