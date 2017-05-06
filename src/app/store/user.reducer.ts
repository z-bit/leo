import { createSelector } from 'reselect';
import { User } from '../models/user.model';
import * as user from './user.actions';

export interface State {
    user: User;
}

const initialState: State = {
    user: {
        fa: '',
        fi: '',
        bkz: '',            // Benutzerkuerzel
        pnr: '',
        name: '',           // Name, Vorname
        abt: '',
        art: '',
        austritt: '',
        berechtigung: 'NO', //'NO' | 'SB' | 'LG' | 'WH' | 'BH' | 'IT';
        token: ''
    }
};

export function reducer (
    state = initialState, action: user.Actions
): State {
    switch(action.type) {
        case user.ActionTypes.LOGIN: {
            console.log('LOGIN: Ich sollte eigentlich von einem Effect bearbeitet werden.');
            return state;
        }
        case user.ActionTypes.LOGIN_OK: {
            const user = action.payload;
            console.log('LOGIN_OK', user);
            return Object.assign({}, state, user);
        }
        case user.ActionTypes.LOGIN_ERROR: {
            const err = action.payload;
            console.log('LOGIN_ERROR', err);
            return state;
        }
        case user.ActionTypes.LOGOUT: {
            return Object.assign({}, state, initialState.user);
        }
        default: {
            console.log('user.reducer - default', action.type);
            return state;
        }
    }
}
export const getUser = (state: State) => state.user;



