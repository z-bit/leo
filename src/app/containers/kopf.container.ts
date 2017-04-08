import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Login } from '../models/login.model';


@Component({
    selector: 'cat-kopf',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <cat-login
            (pnrEvent)="loginWithPnr($event)"
            (loginEvent)="login($event)"
        ></cat-login>
    `
})
export class KopfContainer {
    loginIsVisible: boolean;
    
    ngOnInit(){
        this.loginIsVisible = true;
    }
    
    logout() {
        //call userService.logout();
        this.loginIsVisible = true;
    }
    
    login(log: Login) {
        //alert(login.name + ' - ' + login.pass);
        console.log('Login:', log.name, log.pass);
    }
    
    loginWithPnr(pnr) {
        //alert(pnr);
        console.log('PNR: ', pnr);
    }
}