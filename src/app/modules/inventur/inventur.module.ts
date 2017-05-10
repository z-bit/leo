import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventurContainer } from './containers/inventur.container';
import { InventurRouting } from './inventur.routing';


@NgModule({
  imports: [
      CommonModule,
      InventurRouting,
      
  ],
  declarations: [
      InventurContainer,
  
  ]
})
export class InventurModule { }
