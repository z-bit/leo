import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FirmaDialogComponent } from '../components/firma-dialog.component';
import { Firma } from '../models/firma.model';

import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';
import * as firmaActions from '../store/firma.actions';


@Component({
    selector: 'cat-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <h1>Home</h1>
       
    `,
    styles: [`

    `]
})
export class HomeContainer {
    firma$: Observable<Firma>;
    //a$: Observable<Firma>;
    
    constructor(
        private store: Store<storeIndex.State>
    ) {
        
        console.log('HomeContainer: calling store.select(storeIndex.getFirma)');
        // this suddenly stopped working
        //      this.firma$ = store.select(storeIndex.getFirma);
        // replaced by:
        store.dispatch(new firmaActions.GetFirmaAction(null));
        this.firma$ = store.select('firma');
       
            //
        
        //this.a$ = store.select('firma');
        this.firma$.subscribe( fa => console.log('firma$: ', fa));
        //this.a$.subscribe( fa => console.log('a$: ', fa));
        
    }
}