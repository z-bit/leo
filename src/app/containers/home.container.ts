import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DialogService } from '../services/dialog.service';
import { Firma } from '../models/firma.model';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';
import * as firmaActions from '../store/firma.actions';
import * as userActions from '../store/user.actions';
import * as moduleActions from '../store/module.actions';

@Component({
    selector: 'cat-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h1>Home</h1>
    `,
    styles: [`
    
    `]
})
export class HomeContainer implements OnInit{
    firma$: Observable<Firma>;
    login$: Observable<Login>;
    user$: Observable<User>;
    module$: Observable<string>;
    userSubscription;
    fa: string = '';
    pnr: string = '';

    constructor(
        private store: Store<storeIndex.State>,
        private dialogService: DialogService
    ) {
        this.store.dispatch(new moduleActions.SetAction('Care Angular Tools'));
    }
    
    ngOnInit() {
        // nur um zu sehen, ob die Fa bereits ermittelt ist
        this.firma$ = this.store.select('firma').take(1);
        this.firma$.subscribe(fa => this.fa = fa.fa);
    
        // reagiert auf Änderungen der Pnr: wenn leer, dann Login-Dialog
        // onDestroy: userSubscription.unsubscribe() ==> wichtig
        this.user$ = this.store.select('user');
        this.userSubscription = this.user$.subscribe(
            user => {
                this.pnr = user.pnr;
                if (this.fa && !this.pnr) {
                    this.login$ = this.dialogService.loginDialog();
                    this.login$.subscribe(
                        loginDialog => {
                            const login: Login = Object.assign({}, loginDialog, {fa: this.fa});
                            this.store.dispatch(new userActions.LoginAction(login));
                        }
                        // error wird von LoginErrorAction behandelt
                    );
                }
            }
        );
        
        // Check, ob Fa gesetzt: wenn nicht setzen
        if (!this.fa) {
            this.store.dispatch(new firmaActions.GetFirmaAction(null));
            // Arbeitsplatzdaten (fa) ändern sich nie:
            // * erst undefiniert,
            // * dann ermittelt ==> darum take(2)
            this.firma$ = this.store.select('firma').take(2);
            this.firma$.subscribe(
                fa => {
                    this.fa = fa.fa;
                },
                // Error wird von GetFirmaErrorAction behandelt
                // hier nur als Platzhelter, um zum 3. Parameter (onCompleted) zu kommen
                error => console.log('OnInit - Fa: Error'),
                () => {
                    // onCompleted()
                    // Firma ist ermittelt, this.fa gesetzt,
                    // Login muss gesondert angeschoben werden, damit user$ einen
                    // neuen Wert erhält ==> LogoutAction
                    this.store.dispatch(new userActions.LogoutAction(null));
                }
            );
        }
    }
    
    ngOnDestroy() {
        // Wichtig: sonst laufen mehrere subscribe, wenn mann aus einem anderen Modul
        // ausloggt, d.h Login kommt dann doppelt
        this.userSubscription.unsubscribe();
    }
}