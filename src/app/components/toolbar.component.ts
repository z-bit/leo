import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
    selector: 'cat-toolbar',
    template: `
        <md-toolbar>
            <md-icon (click)="sidenav.emit()">menu</md-icon>
            &nbsp;&nbsp;
            <md-icon>home</md-icon>
            &nbsp;&nbsp;
            {{caption}}
            &nbsp;&nbsp;
            <div class="left">
                <img height="50" src="../../assets/cat_450x340.png">
            </div>
            &nbsp;&nbsp;
            {{banner}}
            &nbsp;&nbsp;
            <span class="fill"></span>
            
            <div    class="firma"
                    *ngIf="firma.name"
                    (click) = "openFirmaDialog()">
                <md-icon>business</md-icon>
                {{ firma.name }}
            </div>
            &nbsp; &nbsp; &nbsp;
            
            <div *ngIf="user.name">
                <span class="user"
                     (click)="openUserDialog()">
                    <md-icon>face</md-icon>
                    {{ user.name }}
                    &nbsp;
                </span>
                <md-icon (click)="logout.emit()">close</md-icon>
            </div>
        </md-toolbar>
    `,
    styles: [`
        .firma:hover {
            cursor: pointer;
        }
        .user:hover {
            cursor: pointer;
        }
        md-icon:hover {
              cursor: pointer;
         }
         md-toolbar {
         	  background-color: lightsteelblue;
              color: black;
         }
         .fill {
             flex: 1 1 auto;
         }
    `]
})
export class ToolbarComponent {
    @Input() caption: string;
    @Input() banner: string;
    @Input() firma;
    @Input() user;
    @Output() logout =  new EventEmitter();
    @Output() sidenav = new EventEmitter();
    
    constructor(
        public dialogService: DialogService
    ) {}
    
    openFirmaDialog() {
        this.dialogService.firmaDialog(this.firma);
    }
    
    openUserDialog() {
        this.dialogService.userDialog(this.user);
    }
    
}

