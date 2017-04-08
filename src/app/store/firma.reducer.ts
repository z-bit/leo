import { Firma } from '../models/firma.model';
import * as firma from './firma.actions';

export interface State {
    firma: Firma
}

const initialState: State = {
    firma: {
        fa: '',
        fi: '',
        name: '',       // Name von Firma/Filiale
        fils: [],
        ip: '',
        client: ''
    }
};

export function reducer (
    state = initialState, action: firma.Actions
): State {
    switch(action.type) {
        case firma.ActionTypes.GET_FIRMA_OK: {
            const firma = action.payload;
            return Object.assign({}, state, firma);
        }
        case firma.ActionTypes.GET_FIRMA_ERROR: {
            const err = action.payload;
            console.log(err);
            return state;
        }
        default: {
            return state;
        }
    }
}

export const getFirma = (state: State) => state.firma;
