import {Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';

import { APP_CONFIG, AppConfig } from '../app.config';

import { Login } from '../models/login.model';
import { User } from '../models/user.model';


@Injectable()
export class UserService {
    user$: Observable<User>;
    constructor(
        private http: Http,
        @Inject(APP_CONFIG) private appConfig: AppConfig
    ) {}
    
    careLogin(login: Login): Observable<User> {
        if (login.pass === '') {
            return this.http
                .get(`${this.appConfig.careApiUrl}/login/${login.fa}/${login.name}`)
                .map ( res => {
                    console.log('UserService - response.json(): ', res.json());
            
                    const time = res.json().time;
                    //todo log time
                    console.log('time: ', time);
            
                    const err = res.json().error;
                    if (err) {
                        return new Error(err);
                    } else {
                        return res.json().user;
                    }
                })
                .filter(res => res.fa !== '')
                .take(1)
            ;
        } else {
            let data = new URLSearchParams();
            data.append('benutzer', login.name);
            data.append('passwort', login.pass);
            return this.http
                .post(`${this.appConfig.careApiUrl}/login/${login.fa}`, data)
                .map ( res => {
                    console.log('UserService - response.json(): ', res.json());
                    
                    const time = res.json().time;
                    //todo log time
                    console.log('time: ', time);
                    
                    const err = res.json().error;
                    if (err) {
                        return new Error(err);
                    } else {
                        return res.json().user;
                    }
                })
                .filter(res => res.fa !== '')
                .take(1)
            ;
        }
    }
    
}