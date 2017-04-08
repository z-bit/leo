import {Inject, Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../app.config';

import { Firma } from '../models/firma.model';


@Injectable()
export class FirmaService {
    
    constructor(
        private http: Http,
        @Inject(APP_CONFIG) private appConfig: AppConfig
    ) {}
    
    getFirma(): Observable<Firma> {
        return this.http
            .get(`${this.appConfig.careApiUrl}/firma`)
            .map ( res => res.json() )
        ;
    }
}
