import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Firma } from '../models/firma.model';
import { User } from '../models/user .model';
import * as userActions from '../store/user.actions';


import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';
import * as firmaActions from '../store/firma.actions';



import { ToolbarComponent } from '../components/toolbar.component';
import { FirmaDialogComponent } from '../components/firma-dialog.component';



@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        <cat-toolbar
            caption="Cat"
            banner="Care Angular Tools"
            [firma]="firma$ | async"
            [user]= "user$  | async"
            (logout)="logout()"
        ></cat-toolbar>
    
        <!--
        <md-grid-list cols="5" rowHeight="{{ratio}}">
        
            <md-grid-tile class="scroll-vertical"
                [colspan]="1"
                [rowspan]="5"
                [style.background]="'seashell'"
            >
                <div>
                   
                    <cat-kopf
                        *ngIf="loginIsVisible"
                    ></cat-kopf>
                </div>         
            </md-grid-tile>
             
            <md-grid-tile
                [colspan]="4"
                [rowspan]="5"
                [style.background]="'lightblue'"
            >
                <router-outlet></router-outlet>
                
            </md-grid-tile>
        </md-grid-list>
        -->
        <router-outlet></router-outlet>
    `,
    styles: [`
        div {
            margin: 30px 5px 5px 5px;
            padding: 10px;
            height: 100%;
            width: 100%;
        }
        .scroll-vertical {
            overflow-y: scroll;
        
        }    
       
    `]
})
export class AppContainer{
    ww = window.innerWidth;
    wh = window.innerHeight - 64;
    //md-grid-list cols = md-grid-tile [rowspan]
    ratio = `${this.ww}:${this.wh}`;
    
    @Output() firma$: Observable<Firma>;
    @Output() user$: Observable<User>;
    constructor(
        private store: Store<storeIndex.State>,
        private router: Router
    ) {
        this.firma$ = store.select('firma');
        this.user$ = store.select('user');
        //this.firma$ = store.select(storeIndex.getFirma);
        //store.select(storeIndex.getFirmaState);
        //store.dispatch(new firmaActions.GetFirmaAction(''));
        /*
        this.firma$.subscribe(
            firma => console.log('AppContainer', firma)
        );
        this.a$ = store.select('firma');
        this.a$.subscribe(
            firma => console.log('AppContainer a$', firma)
        );
        */
    }
    
    logout() {
        console.log('logout');
        this.store.dispatch(new userActions.LogoutAction(null));
        this.router.navigate(['/home']);
    }
    
    
}
