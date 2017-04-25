import {Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';

import { APP_CONFIG, AppConfig } from '../app.config';

import { Firma } from '../models/firma.model';


@Injectable()
export class FirmaService {
    firma$: Observable<Firma>;
    stop$: Observable<Firma>;
    constructor(
        private http: Http,
        @Inject(APP_CONFIG) private appConfig: AppConfig
    ) {}
   
    getFirma(): Observable<Firma> {
        return this.http
            .get(`${this.appConfig.careApiUrl}/firma`)
            .map ( res => {
                console.log('FirmaService - response.json(): ', res.json());
                
                const time = res.json().time;
                //todo log time
                console.log('time: ', time);
                
                const err = res.json().error;
                if (err) {
                    return new Error(err);
                } else {
                    return res.json().firma;
                }
            })
            .filter(res => res.fa !== '')
            .take(1)
        ;
    }
}
