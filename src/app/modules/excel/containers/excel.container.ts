import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';


@Component({
  selector: 'app-excel',
  template: `
      <p>
          excel works!
          <router-outlet></router-outlet>
      </p>


  `,
  styles: [`
  
  `]
})
export class ExcelContainer implements OnInit {

  constructor(
      private store: Store<storeIndex.State>,
  ) {
      this.store.dispatch(new moduleActions.SetAction('Excel'));
  }

  ngOnInit() {
  }

}
