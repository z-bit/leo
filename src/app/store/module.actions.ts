import { type } from './type-cache.util';


export const ActionTypes = {
    SET:    type('[Module] Set'),
    GET:    type('[Module] Get'),
};

export class SetAction {
    type = ActionTypes.SET;
    constructor(public payload: string) {}
}
export class GetAction {
    type = ActionTypes.GET;
    constructor(public payload : void) {}
}

export type Actions = GetAction | SetAction;