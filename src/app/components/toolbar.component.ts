import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import {MdMenuTrigger} from "@angular/material";

@Component({
    selector: 'cat-toolbar',
    template: `
        <md-toolbar>
            <button md-icon-button [mdMenuTriggerFor]="menu">
                <md-icon>menu</md-icon>
            </button>
            <md-menu #menu="mdMenu">
                <button
                    md-menu-item
                    *ngFor="let module of modules"
                    (click)="selectedFromMenu.emit(module)"
                >
                    <img height="20px" src="assets/{{module}}.png">
                    <span>&nbsp;&nbsp;{{module}}</span>
                </button>
            </md-menu>
            &nbsp;&nbsp;
            {{caption}}
            &nbsp;&nbsp;
            <div class="left">
                <img height="50" src="assets/cat_450x340.png">
            </div>
            &nbsp;&nbsp;
            {{banner.module}}
            &nbsp;&nbsp;
            <span class="fill"></span>
            
            <div    class="firma"
                    *ngIf="firma.name"
                    (click) = "openFirmaDialog()">
                <button md-icon-button>
                    <md-icon>business</md-icon>
                </button>
                {{ firma.name }}
            </div>
            &nbsp; &nbsp; &nbsp;
            
            <div *ngIf="user.name">
                <span class="user"
                     (click)="openUserDialog()">
                    <button md-icon-button>
                        <md-icon>face</md-icon>
                    </button>
                    {{ user.name }}
                    &nbsp;
                </span>
                <button md-icon-button  (click)="logout.emit()">
                    <md-icon>close</md-icon>
                </button>
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
        button {
            font-size: 20px;
        }
    `]
})
export class ToolbarComponent {
    @Input() caption: string;
    @Input() banner;
    @Input() modules: string[];
    
    @Input() firma;
    @Input() user;
    @Output() logout =  new EventEmitter();
    @Output() selectedFromMenu = new EventEmitter();
    
    @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
    
    
    
    constructor(
        public dialogService: DialogService,
        
    ) {}
    
    openFirmaDialog() {
        this.dialogService.firmaDialog(this.firma);
    }
    
    openUserDialog() {
        this.dialogService.userDialog(this.user);
    }
    
}

