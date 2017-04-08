import { DBSchema } from '@ngrx/db';
import { Firma } from '../models/firma.model';
import { User } from '../models/user .model';



export const schema: DBSchema = {
    version: 1,
    name: 'cat_app',
    stores: {
        firma: {},
        user: {}
    }
};