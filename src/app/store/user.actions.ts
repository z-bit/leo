import { Login } from '../models/login.model';
import { User } from '../models/user.model';

import { type } from './type-cache.util';

export const ActionTypes = {
    LOGIN:          type('[User] Login'),
    LOGIN_OK:       type('[User] Login Ok'),
    LOGIN_ERROR:    type('[User] Login Error'),
    LOGOUT:         type('[User] Logout')
};

export class LoginAction {
    type = ActionTypes.LOGIN;
    constructor(public payload: Login) {}
}
export class LoginOkAction {
    type = ActionTypes.LOGIN_OK;
    constructor(public payload : User) {}
}
export class LoginErrorAction {
    type = ActionTypes.LOGIN_ERROR;
    constructor(public payload: string) {}
}
export class LogoutAction {
    type = ActionTypes.LOGOUT;
    constructor(public payload: void) {}
}

export type Actions = LoginAction
                    | LoginOkAction
                    | LoginErrorAction
                    | LogoutAction;