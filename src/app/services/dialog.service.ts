import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Firma } from '../models/firma.model';
import { User } from '../models/user.model';

import { LoginDialog } from '../dialogs/login.dialog';
import { FirmaDialog } from '../dialogs/firma.dialog';
import { UserDialog } from '../dialogs/user.dialog';



@Injectable()
export class DialogService {
    constructor(private dialog: MdDialog) {}
    
    public loginDialog() {
        let dialogConfig = new MdDialogConfig();
        dialogConfig.width = '800px';
        dialogConfig.height = '420px';
        dialogConfig.disableClose = true;
        let dialogRef: MdDialogRef<LoginDialog>
            = this.dialog.open(LoginDialog, dialogConfig);
        return dialogRef.afterClosed();
    }
    
    // Anzeige Firma
    public firmaDialog(firma: Firma): void {
        let dialogConfig = new MdDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.height = '370px';
        let dialogRef: MdDialogRef<FirmaDialog>
            = this.dialog.open(FirmaDialog, dialogConfig);
        dialogRef.componentInstance.firma = firma;
        //return dialogRef.afterClosed();
    }
    
    // Anzeige User
    public userDialog(user: User): void {
        let dialogConfig = new MdDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.height = '470px';
        let dialogRef: MdDialogRef<UserDialog>
            = this.dialog.open(UserDialog, dialogConfig);
        dialogRef.componentInstance.user = user;
        //return dialogRef.afterClosed();
    }
}

