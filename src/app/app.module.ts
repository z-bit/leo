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

import { FirmaService } from './services/firma.service';


@NgModule({
    declarations: [
        AppContainer,
        KopfContainer,
        HomeContainer,
        
        LoginComponent,
        ToolbarComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
AppRouting,
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(FirmaEffects),
        DBModule.provideDB(schema),
        
    ],
    providers: [
        FirmaService,
        { provide: APP_CONFIG, useValue: AppConfig },
        
    ],
    bootstrap: [AppContainer]
})
export class AppModule { }
