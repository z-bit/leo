import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
//import { MdInputDirective } from '@angular/material/input';


import { Login } from '../models/login.model';

@Component({
    selector: 'cat-login',
    template: `
        <h1>bitte anmelden ...</h1>
        
        <md-card>
            <md-card-title>mit Personalnummer</md-card-title>
            <md-card-subtitle>
                ausreichend für die meisten Arbeiten
            </md-card-subtitle>
            <md-input-container>
                <input mdInput #pnrInput
                       placeholder="Personalnummer"
                       type="text"
                       tabindex="1"
                       (keyup.enter)="sendPnr()" >
            </md-input-container>
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
        <b>Tab: </b> springt zur nächsten Eingabe<br>
        <b>Enter: </b> sch(l)ießt die Eingabe ab
        

        
    `,
    styles: [`
        button, img {
            float: right;
        }
        md-card {
            margin-bottom: 20px;
            background-color: mintcream;
        }
    `]
})
export class LoginComponent implements OnInit{
    @Output() loginEvent = new EventEmitter();
    @Output() pnrEvent = new EventEmitter();
    login: Login = {name: '', pass: ''};
    
    showSpinPnr: boolean = false;
    @ViewChild('pnrInput') pnrInput;
    @ViewChild('btPnr') btPnr;

    showSpinLogin: boolean = false;
    @ViewChild('loginName') loginName;
    @ViewChild('loginPass') loginPass;
    
    @ViewChild('btLogin') btLogin;
    
    
    
    ngOnInit() {
        this.pnrInput.nativeElement.focus();
    }
    
    sendPnr() {
        const pnr = this.pnrInput.nativeElement.value;
        this.pnrInput.nativeElement.value='';
        this.btPnr.focus();
        this.showSpinPnr = true;
        this.pnrEvent.emit(pnr);
    }
    
    sendLogin() {
        this.login.name = this.loginName.nativeElement.value;
        this.login.pass = this.loginPass.nativeElement.value;
        
        this.loginName.nativeElement.value = '';
        this.loginPass.nativeElement.value = '';
        this.btLogin.focus();
        this.showSpinLogin = true;
        
        this.loginEvent.emit(this.login);
    }
}
