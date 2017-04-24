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

import { DBModule } from '@ngrx/db';
import { schema } from './store/cat.schema';

import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';




import { AppContainer} from './containers/app.container';
import { KopfContainer } from './containers/kopf.container';
import { HomeContainer } from './containers/home.container';


import { LoginComponent } from './components/login.component';
import { ToolbarComponent } from './components/toolbar.component';
import { FirmaDialogComponent } from './components/firma-dialog.component';

import { DialogService } from './services/dialog.servive';
import { FirmaService } from './services/firma.service';



@NgModule({
    declarations: [
        AppContainer,
        KopfContainer,
        HomeContainer,
        
        LoginComponent,
        ToolbarComponent,
        FirmaDialogComponent,
        
    ],
    entryComponents: [
        FirmaDialogComponent,
        
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
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        DBModule.provideDB(schema),
        
    ],
    providers: [
        DialogService,
        FirmaService,
        { provide: APP_CONFIG, useValue: AppConfig },
        
    ],
    bootstrap: [AppContainer]
})
export class AppModule { }
