import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { User } from '../models/user.model';

@Component({
    selector: 'cat-user-dialog',
    template: `
        <md-card>
            <md-card-title>User</md-card-title>
            <table>
                <tr><td><small>Fa:</small>          </td><td> {{ user.fa }}</td></tr>
                <tr><td><small>Fi:</small>          </td><td> {{ user.fi }}</td></tr>
                <tr><td><small>Pnr:</small>         </td><td> {{ user.pnr }}</td></tr>
                <tr><td><small>Bkz:</small>         </td><td> {{ user.bkz }}</td></tr>
                <tr><td><small>Name:</small>        </td><td> {{ user.name }}</td></tr>
                <tr><td><small>Abteilung:</small>   </td><td> {{ user.abt }}</td></tr>
                <tr><td><small>Art:</small>         </td><td> {{ user.art }}</td></tr>
                <tr><td><small>Austritt:</small>    </td><td> {{ user.austritt }}</td> </tr>
                <tr><td><small>Berechtigung:</small></td><td> {{ user.berechtigung }}</td></tr>
                <tr><td><small>Token:</small>       </td><td> {{ user.token }}</td></tr>
            </table>
            <md-card-actions>
                <span class="right">
                    <a md-fab (click)="dialogRef.close()">
                        <md-icon>check</md-icon>
                    </a>
                </span>
            </md-card-actions>
            <br>

        </md-card>
    `,
    styles: [`
        md-card {
            height: 370px;
            width: 300px;
            background-color: lightsteelblue;
        }
        td {
            padding-right: 10px;
            padding-bottom: 5px;
        }
        .right {
            float: right;
        }
    `]
})
export class UserDialog {
    @Input() user: User;
    
    constructor(
        public dialogRef: MdDialogRef<UserDialog>
    ) {}
}