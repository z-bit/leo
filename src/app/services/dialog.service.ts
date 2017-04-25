import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { Firma } from '../models/firma.model';
import { User } from '../models/user.model';

import { Login } from '../models/login.model';

import { FirmaDialogComponent } from '../components/firma-dialog.component';
import { LoginDialog } from '../dialogs/login.dialog';
import { UserDialog } from '../dialogs/user.dialog';



@Injectable()
export class DialogService {
    constructor(private dialog: MdDialog) {}
    
    public firmaDialog(firma: Firma): void {
        let dialogConfig = new MdDialogConfig();
        dialogConfig.width = '400px';
        dialogConfig.height = '370px';
        let dialogRef: MdDialogRef<FirmaDialogComponent>
            = this.dialog.open(FirmaDialogComponent, dialogConfig);
        dialogRef.componentInstance.firma = firma;
        //return dialogRef.afterClosed();
    }
    
    public loginDialog() {
        let dialogConfig = new MdDialogConfig();
        dialogConfig.width = '800px';
        dialogConfig.height = '420px';
        dialogConfig.disableClose = true;
        let dialogRef: MdDialogRef<LoginDialog>
            = this.dialog.open(LoginDialog, dialogConfig);
        return dialogRef.afterClosed();
        
    }
    
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

