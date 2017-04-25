import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Firma } from '../models/firma.model';

@Component({
    selector: 'cat-firma-dialog',
    template: `
        <md-card>
            <md-card-title>Firma</md-card-title>
            <table>
               <tr><td><small>Firma:</small>         </td><td> {{ firma.fa }}</td></tr>
               <tr><td><small>Filiale:</small>       </td><td> {{ firma.fi }}</td></tr>
               <tr><td><small>Name:</small>          </td><td> {{ firma.name }}</td></tr>
               <tr><td><small>alle Filialen:</small> </td><td> {{ firma.fils }}</td></tr>
               <tr><td><small>IP-Aressen:</small>    </td><td> {{ firma.ip }}</td></tr>
               <tr><td><small>Arbeitsplatz:</small>  </td><td> {{ firma.client }}</td> </tr>
            </table>
            <md-card-actions>
                <span class="right">
                    <a md-fab (click)="dialogRef.close()">
                        <md-icon>check</md-icon>
                    </a>
                </span>
            </md-card-actions>
            <br>
           
        </md-card>
    `,
    styles: [`
        md-card {
            height: 270px;
            width: 300px;
            background-color: lightsteelblue;
        }
        td {
            padding-right: 10px;
            padding-bottom: 5px;
        }
        .right {
            float: right;
        }
    `]
})
export class FirmaDialogComponent {
    @Input() firma: Firma;
    
    constructor(
        public dialogRef: MdDialogRef<FirmaDialogComponent>
    ) {}
}