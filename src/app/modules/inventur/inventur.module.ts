import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular/main';



import { InventurContainer } from './containers/inventur.container';
import { LaufendeInventurenComponent } from './components/laufende-inventuren.component';
import { AbgeschlosseneInventurenComponent } from './components/abgeschlossene-inventuren.component';

import { InventurRouting } from './inventur.routing';



@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      AgGridModule.withComponents([]),
      
      InventurRouting,
      
  ],
  declarations: [
      InventurContainer,
      
      LaufendeInventurenComponent,
      AbgeschlosseneInventurenComponent,
  
  ]
})
export class InventurModule { }
