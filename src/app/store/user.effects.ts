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
//import { of } from 'rxjs/Observable/of';

import { UserService } from '../services/user.service';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
    @Effect() user$: Observable<Action> = this.actions$
        .ofType(userActions.ActionTypes.LOGIN)
        //    .debounceTime(300)
        .map(toPayload)
        .switchMap( (login) => {
            console.log('UserEffects', this.userService.careLogin(login));
            return this.userService.careLogin(login)
                .map( user => new userActions.LoginOkAction(user) )
                ;
        })
    ;
    
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
}
