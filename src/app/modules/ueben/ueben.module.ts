import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UebenContainer } from './containers/ueben.container';
import { UebenRouting } from './ueben.routing';


@NgModule({
  imports: [
      CommonModule,
      UebenRouting,
      
  ],
  declarations: [
      UebenContainer
  ]
})
export class UebenModule { }
