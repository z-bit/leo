import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.routing';

import { APP_CONFIG, AppConfig } from './app.config';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/index';

import { EffectsModule } from '@ngrx/effects';
import { FirmaEffects } from './store/firma.effects';
import { UserEffects } from './store/user.effects';

import { DBModule } from '@ngrx/db';
import { schema } from './store/cat.schema';

import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppContainer} from './containers/app.container';
//import { KopfContainer } from './containers/kopf.container';
import { HomeContainer } from './containers/home.container';


//import { LoginComponent } from './components/login.component';
import { ToolbarComponent } from './components/toolbar.component';
import { FirmaDialog } from './dialogs/firma.dialog';
import { LoginDialog } from './dialogs/login.dialog';
import { UserDialog } from './dialogs/user.dialog';

import { DialogService } from './services/dialog.service';
import { FirmaService } from './services/firma.service';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AppContainer,
        //KopfContainer,
        HomeContainer,
        
        //LoginComponent,
        ToolbarComponent,
        
        LoginDialog,
        FirmaDialog,
        UserDialog,
        
    ],
    entryComponents: [
        LoginDialog,
        FirmaDialog,
        UserDialog,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        AppRouting,
        
        StoreModule.provideStore(reducer),
        EffectsModule.run(FirmaEffects),
        EffectsModule.run(UserEffects),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        DBModule.provideDB(schema),
        
    ],
    providers: [
        DialogService,
        FirmaService,
        UserService,
        { provide: APP_CONFIG, useValue: AppConfig },
        
    ],
    bootstrap: [AppContainer]
})
export class AppModule { }
