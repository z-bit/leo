import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Firma } from '../models/firma.model';
import { User } from '../models/user.model';
import { Module } from '../models/module.model';

import * as userActions from '../store/user.actions';

import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <section>
            <header>
                <cat-toolbar
                    caption="Cat"
                    [banner]="module$ | async"
                    [firma]="firma$ | async"
                    [user]= "user$  | async"
                    [modules]="moduleList"
                    (logout)="logout()"
                    (sidenav)="sidenavToggle()"
                    (selectedFromMenu)="navigate($event)"
                ></cat-toolbar>
            </header>
            <main>
                <md-sidenav-container>
                    
                    <router-outlet></router-outlet>
                    
                    <cat-sidenav
                        [isOpen]="sidenavIsOpen"
                        (closed)="sidenavToggle()"
                    ></cat-sidenav>
                </md-sidenav-container>
            </main>
            <footer>Schmolck GmbH & Co. KG</footer>
        </section>
    `,
    styles: [`
        section {
            min-height: 98vh;
            display: flex;
            flex-direction: column;
        }
        header {
            /* no flex rules */
        }
        main {
            flex: 1 0 auto;
            overflow: auto;
        }
        footer {
            background: darkblue;
            color: white;
            padding: 10px;
            font-family: "Arial";
            font-weight: bold;
        }
    `]
})
export class AppContainer{
    @Input() selectedFromMenu;
    @Output() firma$: Observable<Firma>;
    @Output() user$: Observable<User>;
    @Output() module$: Observable<Module>;
    @Output() modules: string[];
    @Output() loggedOut = new EventEmitter();
    private sidenavIsOpen: boolean = false;
    moduleList: string[] = [
        'Home',
        'Excel',
        'Inventur',
        'ECCnet',
        'Ueben'
    ];
   
    private w: number;
    private h: number;
    constructor(
        private store: Store<storeIndex.State>,
        private router: Router
    ) {
        this.firma$ = store.select('firma');
        this.user$ = store.select('user');
        this.module$ = store.select('module');
        this.w = window.innerWidth;
        this.h = window.innerHeight;
        
    }
    
    logout() {
        this.store.dispatch(new userActions.LogoutAction(null));
        this.router.navigate(['/home']);
    }
    
    navigate(path) {
        path = path.toLowerCase();
        this.router.navigate([path], {queryParams: {init: true}});
    }
    
    sidenavToggle() {
        this.sidenavIsOpen = !this.sidenavIsOpen;
    }
}
