import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UebenContainer } from './containers/ueben.container';
import { UebenRouting } from './ueben.routing';


@NgModule({
  imports: [
      CommonModule,
      MaterialModule,
      UebenRouting,
      
  ],
  declarations: [
      UebenContainer
  ]
})
export class UebenModule { }
