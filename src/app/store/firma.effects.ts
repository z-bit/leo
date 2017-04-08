import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//import { empty } from 'rxjs/Observable/empty';
import { of } from 'rxjs/Observable/of';

import { FirmaService } from '../services/firma.service';

import * as firmaActions from './firma.actions';

@Injectable()
export class FirmaEffects {
    firma$: Observable<Action> = this.actions$
        .ofType(firmaActions.ActionTypes.GET_FIRMA)
//        .debounceTime(300)
//        .map(toPayload)
        .switchMap( () => {
            return this.firmaService.getFirma()
                .map( firma => new firmaActions.GetFirmaOkAction(firma) )
          
            ;
        })
    ;
    
    constructor(
        private actions$: Actions,
        private firmaService: FirmaService
    ) {}
}
