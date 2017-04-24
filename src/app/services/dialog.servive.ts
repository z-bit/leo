import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Firma } from '../models/firma.model';
import { FirmaDialogComponent } from '../components/firma-dialog.component';

@Injectable()
export class DialogService {
    constructor(private dialog: MdDialog) {}
    
    public firmaDialog(firma: Firma): void {
        let dialogRef: MdDialogRef<FirmaDialogComponent>
            = this.dialog.open(FirmaDialogComponent);
        dialogRef.componentInstance.firma = firma;
        //return dialogRef.afterClosed();
    }
}

