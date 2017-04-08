import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ToolbarLink } from '../models/toolbar-link.model';

@Component({
    selector: 'cat-toolbar',
    template: `
        <md-toolbar>
            <div class="left">
                <md-icon>menu</md-icon>
                &nbsp;&nbsp;
                {{caption}}
                &nbsp;&nbsp;
                {{banner}}
                &nbsp;&nbsp;
            </div>
            
            <span class="fill"></span>
            
            <md-icon
                (click)="logout.emit()"
                mdTooltip="abmelden"
            >account_circle</md-icon>
        </md-toolbar>
    `,
    styles: [`
         md-icon:hover {
              cursor: pointer;
         }
         md-toolbar {
         	  background-color: darkslategray;
              color: seashell; 
         }
         .fill {
             flex: 1 1 auto;
         }
    `]
})
export class ToolbarComponent {
    @Input() caption: string;
    @Input() banner: string;
    @Output() logout =  new EventEmitter();
    
    
}

