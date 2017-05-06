import { Component, Output, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Firma } from '../models/firma.model';
import { User } from '../models/user.model';
import * as userActions from '../store/user.actions';

import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <md-sidenav-container>
        <cat-toolbar
            caption="Cat"
            banner="Care Angular Tools"
            [firma]="firma$ | async"
            [user]= "user$  | async"
            (logout)="logout()"
            (sidenav)="sidenavOpen()"
        ></cat-toolbar>
 
        <router-outlet></router-outlet>

        
            <md-sidenav #sidenav class="sidenav">
                <md-icon (click)="sidenav.close()">menu</md-icon>
                &nbsp;&nbsp;
                <md-icon>home</md-icon>
                &nbsp;&nbsp;
                Cat
                &nbsp;&nbsp;
                <ul>
                    <li>Jolly Good!</li>
                </ul>
                
            </md-sidenav>
        </md-sidenav-container>
    `,
    styles: [`
        .sidenav {
            padding: 20px;
            background-color: lightsteelblue;
            
        }
    `]
})
export class AppContainer{
    @Output() firma$: Observable<Firma>;
    @Output() user$: Observable<User>;
    
    @ViewChild('sidenav') sidenav;
    
    constructor(
        private store: Store<storeIndex.State>,
        private router: Router
    ) {
        this.firma$ = store.select('firma');
        this.user$ = store.select('user');
    }
    
    logout() {
        console.log('logout');
        this.store.dispatch(new userActions.LogoutAction(null));
        this.router.navigate(['/home']);
    }
    
    sidenavOpen() {
        this.sidenav.open()
    }
}
