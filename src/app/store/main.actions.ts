import { type } from './type-cache.util';
import { Action } from '@ngrx/store';



export const ActionTypes = {
    INCREMENT: type('INCREMENT'),
    DECREMENT: type('DECREMENT')
};

export class IncrementAction implements Action {
    type = ActionTypes.INCREMENT;
    
    constructor() {}
}

export class DedrementAction implements Action {
    type = ActionTypes.DECREMENT;
    
    constructor() {}
}

export type Actions = IncrementAction
                    | DedrementAction;