import { Action } from '@ngrx/store';

import { Firma } from '../models/firma.model';
import { type } from './type-cache.util';

export const ActionTypes = {
    GET_FIRMA_ERROR: type('[Firma] Get Firma Error'),
    GET_FIRMA: type('[Firma] Get Firma'),
    GET_FIRMA_OK: type('[Firma] Get Firma Ok'),
   
};

export class GetFirmaAction implements Action{
    type = ActionTypes.GET_FIRMA;
    constructor(public payload: string) {}
}

export class GetFirmaOkAction implements Action{
    type = ActionTypes.GET_FIRMA_OK;
    constructor(public payload: Firma) {}
}

export class GetFirmaErrorAction implements Action{
    type = ActionTypes.GET_FIRMA_ERROR;
    constructor(public payload: string) {}
}

export type Actions = GetFirmaAction
                    | GetFirmaOkAction
                    | GetFirmaErrorAction
;