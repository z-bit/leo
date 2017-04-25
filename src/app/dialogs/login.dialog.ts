import { Component, ViewChild } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Login } from '../models/login.model';

@Component({
    selector: 'cat-login-dialog',
    template: `
        <h3>bitte anmelden ...</h3>
    <div>
        <md-card>
            <md-card-title>mit Personal-Nummer</md-card-title>
            <md-card-subtitle>
                ausreichend für die meisten Arbeiten
                &nbsp; <br>
                &nbsp; <br>
                &nbsp; <br>
            </md-card-subtitle>
            <md-input-container>
                <input mdInput #pnrInput
                       placeholder="Personal-Nummer"
                       type="text"
                       tabindex="1"
                       (keyup.enter)="sendPnr()" >
            </md-input-container>
            &nbsp; <br>
            <button md-button
                    tabindex="5"
                    #btPnr
                    (click)="sendPnr()"
            >Anmelden</button>
            <br>
            <img
                #spinPnr
                *ngIf="showSpinPnr"
                src="../../assets/ajax_loader_gray_32.gif"
            >
            <br>
        </md-card>
     
        <md-card>
            <md-card-title>mit Care Login</md-card-title>
            <md-card-subtitle>
                notwendig für vollen Funtionsumfang,
                empfohlen für Serviceberater und Lagermitarbeiter
            </md-card-subtitle>
            <md-input-container>
                <input mdInput #loginName
                       placeholder="Care Login"
                       type="text"
                       tabindex="2" >
                <br>
            </md-input-container>
            <md-input-container>
                <input mdInput #loginPass
                       placeholder="Care Passwort"
                       type="password"
                       tabindex="3"
                       (keyup.enter)="sendLogin()"
                >
            </md-input-container>
            <button md-button
                    tabindex="4"
                    #btLogin
                    (click)="sendLogin()"
            >Anmelden</button>
            <br>
            <img
                #spinLogin
                *ngIf="showSpinLogin"
                src="../../assets/ajax_loader_gray_32.gif"
            >
            <br>
        </md-card>
        <br>
        <span>
            &nbsp; <br>
            <b>Tab: </b> springt zur nächsten Eingabe<br>
            <b>Enter: </b> sch(l)ießt die Eingabe ab
        </span>
    </div>
    

    `,
    styles: [`
        div {
            float: left;
        }
        span {
            padding-top: 20px;
          
        }
        button, img {
            float: right;
        }
        md-card {
            margin-left: 20px;
            float: left;
            height: 200px;
            width: 300px;
            background-color: lightsteelblue;
        }
    `]
})
export class LoginDialog{
    public login: Login = {name: '', pass: '', fa: ''};
    
    showSpinPnr: boolean = false;
    @ViewChild('pnrInput') pnrInput;
    @ViewChild('btPnr') btPnr;
    
    showSpinLogin: boolean = false;
    @ViewChild('loginName') loginName;
    @ViewChild('loginPass') loginPass;
    
    @ViewChild('btLogin') btLogin;
    
    constructor(
        public dialogRef: MdDialogRef<LoginDialog>
    ) {}
    
    sendPnr(){
        this.login.pass = '';
        this.login.name = this.pnrInput.nativeElement.value;
        this.pnrInput.nativeElement.value='';
        this.btPnr.focus();
        this.showSpinPnr = true;
        this.dialogRef.close(this.login);
        //this.pnrEvent.emit(pnr);
    }
    
    sendLogin(){
        this.login.name = this.loginName.nativeElement.value;
        this.login.pass = this.loginPass.nativeElement.value;
        this.btLogin.focus();
        this.dialogRef.close(this.login)
    }
}