import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { DataLaufend } from '../models/data-laufend.model';
import { DataAbgeschlossen } from '../models/data-abgeschlossen.model';


import { Store } from '@ngrx/store';
import * as storeIndex from 'app/store/index';
import * as moduleActions from 'app/store/module.actions';
import { Firma } from 'app/models/firma.model';
import {Observable} from "rxjs";



@Component({
    selector: 'app-inventur',
    template: `
        <br>
        <br>
        <br>
        <md-card class="center">
            <h1>Cleo Inventur <b>{{ invJahr }}</b> für
                Firma   <b>{{ invFirma }}</b> -
                Filiale <b>{{ invFil }}</b> -
                Lager   <b>{{ invLager }}</b>
            </h1>
            <br>
            <span class="right">
                <md-select
                    placeholder="Jahr"
                    [(ngModel)]="invJahr"
                    floatPlaceholder="always">
                    <md-option *ngFor="let jahr of jahre" value="{{ jahr }}">
                        {{ jahr }}
                    </md-option>
                </md-select>
            </span>
            <span class="right">
                <md-select
                    placeholder="Lager"
                    [(ngModel)]="invLager"
                    floatPlaceholder="always">
                    <md-option *ngFor="let lager of lagers" value="{{ lager }}">
                        {{ lager }}
                    </md-option>
                </md-select>
            </span>
            <span class="right">
                <md-select
                    placeholder="Filiale"
                    [(ngModel)]="invFil"
                    floatPlaceholder="always">
                    <md-option *ngFor="let fil of fils" value="{{ fil }}">
                        {{ fil }}
                    </md-option>
                </md-select>
            </span>
       
        <br>
        
        <br>
        <br>
        <md-tab-group>
            <md-tab label="Laufende Invenuren">
                <inv-laufend
                    [invJahr]="invJahr"
                    [gridData]="dataLaufend"
                    (lfdInvSelected)="onLfdSelected($event)"
                ></inv-laufend>
            </md-tab>
            <md-tab label="Abgeschlossene Inventuren">
                <inv-abgeschlossen
                    [invJahr]="invJahr"
                    [gridData]="dataAbgeschlossen"
                    (abgInvSelected)="onAbgSelected($event)"
                ></inv-abgeschlossen>
            </md-tab>
        </md-tab-group>
            lfd: {{laufendesJahr}}
        </md-card>

  `,
  styles: [`
      .right {
          position: relative;
          float: right;
          margin-left: 20px;
      }
      .center {
          width: 800px;
          margin: 0 auto;
      }
      b {
          color: blue;
      }
     
  `]
})
export class InventurContainer implements OnInit {
    firma$: Observable<Firma>;
    private dataLaufend: DataLaufend[];
    private lfdInvSelected: string;
    private dataAbgeschlossen: DataAbgeschlossen[];
    private abgInvSelected: string;
    
    private invFirma: string;
    private invFil: string;
    private fils: string[];
    private invLager: string;
    private lagers: string[];
    private laufendesJahr: string = new Date().getFullYear().toString();
    private invJahr: string = this.laufendesJahr;
    private jahre: string[];
    constructor(
      private store: Store<storeIndex.State>,
    ) {
      store.dispatch(new moduleActions.SetAction('Inventur'));
      this.firma$ = store.select('firma');
    }

    ngOnInit() {
        let l = new Date().getFullYear();
        this.jahre = [l.toString(), (l-1).toString(), (l-2).toString()];
        this.firma$.subscribe( fa => {
            this.invFirma = fa.fa;
            this.invFil = fa.fi;
            this.fils = fa.fils;
        });
        //this.invFirma = '20'; //todo initialize
        //this.invFil = '01';
        //this.fils = ['01', '02', '03', '04', '05', '11'];
        this.invLager = 'LG1';
        this.lagers = ['LG1', 'LW1'];
        this.dataLaufend = [
            {nr: '1', bez: 'Inventur Nr. 1', z1z: 0, z1p: 100, z2z: 0, z2p: 0},
            {nr: '2', bez: 'Inventur Nr. 2', z1z: 0, z1p: 200, z2z: 0, z2p: 0},
            {nr: '3', bez: 'Inventur Nr. 3', z1z: 0, z1p: 300, z2z: 0, z2p: 0},
            {nr: '4', bez: 'Inventur Nr. 4', z1z: 0, z1p: 400, z2z: 0, z2p: 0},
            {nr: '5', bez: 'Inventur Nr. 5', z1z: 0, z1p: 500, z2z: 0, z2p: 0},
            {nr: '1', bez: 'Inventur Nr. 1', z1z: 0, z1p: 100, z2z: 0, z2p: 0},
            {nr: '2', bez: 'Inventur Nr. 2', z1z: 0, z1p: 200, z2z: 0, z2p: 0},
            {nr: '3', bez: 'Inventur Nr. 3', z1z: 0, z1p: 300, z2z: 0, z2p: 0},
            {nr: '4', bez: 'Inventur Nr. 4', z1z: 0, z1p: 400, z2z: 0, z2p: 0},
            {nr: '5', bez: 'Inventur Nr. 5', z1z: 0, z1p: 500, z2z: 0, z2p: 0},
        ];
        let d: string = '2016-12-31';
        this.dataAbgeschlossen = [
            {nr: '1', bez: 'Inventur Nr. 1', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '2', bez: 'Inventur Nr. 2', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '3', bez: 'Inventur Nr. 3', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '4', bez: 'Inventur Nr. 4', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '5', bez: 'Inventur Nr. 5', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '6', bez: 'Inventur Nr. 6', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '7', bez: 'Inventur Nr. 7', datumZ1: d, datumZ2: d, archive: 55},
            {nr: '8', bez: 'Inventur Nr. 8', datumZ1: d, datumZ2: d, archive: 55},
        ];
        
    }
    
    onLfdSelected($event){
        this.lfdInvSelected = $event;
        alert('lfd: ' + $event);
    }
    
    onAbgSelected($event){
        this.abgInvSelected = $event;
        alert('abg: ' + $event);
    }
    

}
