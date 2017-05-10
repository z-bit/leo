import { Routes } from '@angular/router';

import { EccnetContainer } from './containers/eccnet.container';
import { TestContainer } from './containers/test.comtainer';


// instant loading: routes are being used in app.rpouting
export const eccnetRoutes: Routes = [
    {path: '', component: EccnetContainer},
    {path: 'test', component: TestContainer},
    
];

