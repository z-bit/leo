import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelContainer } from './containers/excel.container';
import { ExcelRouting } from './excel.routing';


@NgModule({
  imports: [
      CommonModule,
      ExcelRouting,
      
  ],
  declarations: [
      ExcelContainer,
  
  ]
})
export class ExcelModule { }
