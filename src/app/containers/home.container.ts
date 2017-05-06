import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {LoginDialog } from '../dialogs/login.dialog';
import { DialogService } from '../services/dialog.service';


import { Firma } from '../models/firma.model';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';



import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';
import * as firmaActions from '../store/firma.actions';
import * as userActions from '../store/user.actions';


@Component({
    selector: 'cat-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h1>Home</h1>
        <!-- Spinner schaltet nicht ab, wenn changeDetection: ChangeDetectionStrategy.OnPush
        <img *ngIf="fa === ''" class="centered" src="../../assets/spiral-spinner.gif">
        -->
    `,
    styles: [`
        .centered {
            display: block;
            margin: auto;
        }
    `]
})
export class HomeContainer implements OnInit{
    firma$: Observable<Firma>;
    login$: Observable<Login>;
    user$: Observable<User>;
    fa: string = '';
    
    constructor(
        private store: Store<storeIndex.State>,
        private dialogService: DialogService
    ) {
        
        console.log('HomeContainer: calling store.select(storeIndex.getFirma)');
        // this suddenly stopped working
        //      this.firma$ = store.select(storeIndex.getFirma);
        // replaced by:
        store.dispatch(new firmaActions.GetFirmaAction(null));
        this.firma$ = store.select('firma');
        this.firma$.subscribe(
            fa => {
                console.log('Home constructor firma$: ', fa);
                if (fa.fa) {
                    this.fa = fa.fa;
                    this.login$ = this.dialogService.loginDialog();
                    this.login$.subscribe( loginDialog => {
                        const login: Login = Object.assign({}, loginDialog, {fa: fa.fa});
                        console.log('Login: ', login);
                        store.dispatch(new userActions.LoginAction(login));
                        this.user$ = store.select('user');
                    });
                    
                    
                }
            },
            error => console.log('Home constuctor - Error: ' + error), //todo: this is not working
            () => console.log('Home constructor - firma$ completed')
        );
    }
    ngOnInit() {
        this.user$ = this.store.select('user');
        this.user$.subscribe(
            user => {
                console.log('Home onInit user$: ', user);
                if (user.pnr === '') {
                    this.login$ = this.dialogService.loginDialog();
                    this.login$.subscribe( loginDialog => {
                        const login: Login = Object.assign({}, loginDialog, {fa: this.fa});
                        console.log('Login: ', login);
                        this.store.dispatch(new userActions.LoginAction(login));
                    });
    
                }
            },
            error => console.log('Home onInit - Error: ' + error),
            () => console.log('Home constructor - firma$ completed')
        );
    }
}