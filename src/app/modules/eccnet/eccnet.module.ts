import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EccnetHome } from './eccnet.home';

import { EccnetContainer } from './containers/eccnet.container';
import { TestContainer } from './containers/test.comtainer';


@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      
  ],
  declarations: [
      EccnetHome,
      EccnetContainer,
      TestContainer,
  ]
})
export class EccnetModule { }
