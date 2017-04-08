import { Login } from '../models/login.model';
import { type } from './type-cache.util';

export const ActionTypes = {
    ANMELDEN:   type('[Login] Anmelden'),
    CARELOGIN:  type('[Login] Carelogin'),
    LOGOUT:     type('[Login] Logout')
};

export class AnmeldenAction {
    type = ActionTypes.ANMELDEN;
    constructor(public payload: string) {}
}

export class CareLoginAction {
    type = ActionTypes.CARELOGIN;
    constructor(public payload : Login) {}
}

export class LogoutAction {
    type = ActionTypes.LOGOUT;
    // no payload
}

export type Actions = AnmeldenAction
                    | CareLoginAction
                    | LogoutAction;