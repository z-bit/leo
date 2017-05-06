import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Login } from '../models/login.model';
import { Firma } from '../models/firma.model';
import * as storeIndex from '../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';




@Component({
    selector: 'cat-kopf',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    
    `
})
export class KopfContainer {
    firma$: Observable<Firma>;
    constructor(
        private store: Store<storeIndex.State>
    ) {
        this.firma$ = store.select('firma');
        //this.user$ = store.select('user');
    }
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