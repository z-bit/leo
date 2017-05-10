import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';


@Component({
  selector: 'app-inventur',
  template: `
      <p>
          inventur works!
      </p>


  `,
  styles: [`
  
  `]
})
export class InventurContainer implements OnInit {

  constructor(
      private store: Store<storeIndex.State>,
  ) {
      this.store.dispatch(new moduleActions.SetAction('Inventur'));
  }

  ngOnInit() {
  }

}
