import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as firmaReducer from './firma.reducer';

export interface State {
    firma: firmaReducer.State,
    
}

const reducers = {
    firma: firmaReducer.reducer,
    
};

const developmentReducer: ActionReducer<State> =
    compose(storeFreeze, combineReducers)(reducers);
    
const productionReducer: ActionReducer<State> =
    combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getFirmaState = (state: State) => state.firma;
export const getFirma = createSelector(getFirmaState, firmaReducer.getFirma);