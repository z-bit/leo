import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Firma } from '../models/firma.model';

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
            (logout)="logout()"
        ></cat-toolbar>
    
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
    loginIsVisible: boolean = true;
    ww = window.innerWidth;
    wh = window.innerHeight - 64;
    //md-grid-list cols = md-grid-tile [rowspan]
    ratio = `${this.ww}:${this.wh}`;
    
    @Output() firma$: Observable<Firma>;
    //a$: Observable<Firma>;
    constructor(
        private store: Store<storeIndex.State>
    ) {
        this.firma$ = store.select('firma');
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
        this.loginIsVisible = false;
    }
    
    
}
