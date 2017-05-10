import { createSelector } from 'reselect';
import { Module } from '../models/module.model';

import * as module from './module.actions';

export interface State {
    module: Module;
}

const initialState: State = {
    module: {
        module: 'Care Angular Tools' // Home
    }
};

export function reducer (
    state = initialState, action: module.Actions
): State {
    switch(action.type) {
        case module.ActionTypes.GET: {
            return state;
        }
        case module.ActionTypes.SET: {
            const module = action.payload;
            return Object.assign({}, state, {module});
        }
        default: {
            return state;
        }
    }
}

export const getModule = (state: State) => state.module;



