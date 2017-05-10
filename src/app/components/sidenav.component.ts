import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'cat-sidenav',
    template: `
        <md-sidenav #sidenav class="sidenav" opened="{{ isOpen }}">
            <div class="right">
                <md-icon (click)="closeSidenav()">close</md-icon>
            </div>

            <strong>Das ist ein Sidenav.</strong>

        </md-sidenav>
       
    `,
    styles: [`
        .sidenav {
            padding: 20px;
            background-color: lightsteelblue;
        }
        .right {
            float: right;
            cursor: pointer;
        }
        
    `]
})
export class SidenavComponent {
    @Input() isOpen: boolean;
   
    @ViewChild('sidenav') sidenav;
    @Output() closed = new EventEmitter();
    
    closeSidenav() {
        this.sidenav.close();
        //send message to AppContainer to toggle
        this.closed.emit();
    }
}