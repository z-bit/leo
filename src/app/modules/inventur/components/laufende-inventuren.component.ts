import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GridOptions} from 'ag-grid';
import { DataLaufend } from '../models/data-laufend.model';

@Component({
    selector: 'inv-laufend',
    template:`
        <md-card>
            <md-card-title>
                gezählte Positionen in <i>{{ invJahr }}</i>: <strong>0</strong>
                <span class="right">
                    Stand <strong>12:57</strong> Uhr
                    <button md-button>
                       aktualisieren
                    </button>
                </span>
            </md-card-title>
           
            <div [hidden]="invJahr == laufendesJahr"><br></div>
            <ag-grid-angular
                #agGrid
                class="ag-fresh"
                [gridOptions]="gridOptions"
                style="width: 720px; height: 200px; margin: 10px;"
            ></ag-grid-angular>
            <br>
            <button md-button  class="right">Inventur zurücksetzen</button>
            <br>
        </md-card>
         
    `,
    styles: [`
        .right {
            position: relative;
            float: right;
            margin-left: 20px;
        }
    `]
})
export class LaufendeInventurenComponent implements OnInit{
    @Input() gridData: DataLaufend[];
    @Input() invJahr: string;
    @Output() lfdInvSelected = new EventEmitter<string>();
    
    onSelectionChanged = () =>
        //console.log('sel nr: ', this.gridOptions.api.getSelectedRows()[0].nr);
        this.lfdInvSelected.emit(this.gridOptions.api.getSelectedRows()[0].nr);
    
    gridOptions: GridOptions = {
        columnDefs: [
            {headerName: 'Inventur', field: 'nr', width: 80},
            {headerName: 'Bezeichnung', field: 'bez', width: 220},
            {headerName: 'Z1 gezählt', field: 'z1z', width: 100},
            {headerName: 'Z1 Positionen', field: 'z1p', width: 100},
            {headerName: 'Z2 gezählt', field: 'z2z', width: 100},
            {headerName: 'Z2 Positionen', field: 'z2p', width: 100}
        ],
        rowSelection: 'single',
        //onSelectionChanged: () => console.log('sel nr: ', this.gridOptions.api.getSelectedRows()[0].nr)
        onSelectionChanged: this.onSelectionChanged
    };
    
    ngOnInit() {
        this.gridOptions.rowData = this.gridData;
        //this.gridOptions.onSelectionChanged = this.onSelectionChanged;
    }
   
   
}