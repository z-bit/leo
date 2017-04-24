import { Firma } from '../models/firma.model';
import * as firma from './firma.actions';

export interface State {
    firma: Firma
}


const initialState: State = {
    firma: {
        fa: '33',
        fi: '',
        name: '',
        fils: [],
        ip: '',
        client: ''
    }
};

export function reducer (
    state = initialState, action: firma.Actions
): State {
    switch(action.type) {
        case firma.ActionTypes.GET_FIRMA: {
            console.log('GET_FIRMA: Ich sollte eigentlich von einem Effect bearbeitet werden.');
            return state;
        }
        case firma.ActionTypes.GET_FIRMA_OK: {
            const firma = action.payload;
                
                //test
              
                //const firma2 = initialState;
                //console.log(firma2);
                //firma2.firma.fa =firma.fa;
                //firma2.firma.fi = payload.fi;
                //firma.firma.name = payload.name;
                //firma.firma.fils = payload.fils;
                //firma.firma.ip = payload.ip;
                //firma.firma.client = payload.client;
            
            console.log('GET_FIRMA_OK', firma);
            return Object.assign({}, state, firma);
        }
        case firma.ActionTypes.GET_FIRMA_ERROR: {
            const err = action.payload;
            console.log('GET_FIRMA_ERROR', err);
            return state;
        }
        default: {
            console.log('firma.reducer - default', action.type);
            return state;
        }
    }
}

export const getFirma = (state: State) => state.firma;
