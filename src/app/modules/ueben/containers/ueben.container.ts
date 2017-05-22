import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdSelectChange} from '@angular/material';

import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';


@Component({
    selector: 'app-ueben',
    template: `
        <p>ueben works!</p>
    `,
    styles: [`
  
    `]
})
export class UebenContainer implements OnInit {
    
    constructor(
        private store: Store<storeIndex.State>,
    ) {
        this.store.dispatch(new moduleActions.SetAction('Ueben'));
    }

    ngOnInit() {}
}

