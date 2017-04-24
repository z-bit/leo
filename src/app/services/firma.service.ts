import {Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APP_CONFIG, AppConfig } from '../app.config';

import { Firma } from '../models/firma.model';


@Injectable()
export class FirmaService {
    firma$: Observable<Firma>;
    constructor(
        private http: Http,
        @Inject(APP_CONFIG) private appConfig: AppConfig
    ) {}
   
    getFirma(): Observable<Firma> {
        this.firma$ = this.http
            .get(`${this.appConfig.careApiUrl}/firma`)
            .map ( res => res.json() )
        ;
        
        //debug
        this.firma$.subscribe(
            firma => console.log('FirmaService Firma: ', firma),
            error => console.log('FirmaService Error: ', error)
        );
        
        return this.firma$;
    }
}
