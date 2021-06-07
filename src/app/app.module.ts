import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./@core/core.module";
import {StoreModule} from "@ngrx/store";
import {Reducers} from "./store";
import {metaReducers} from "./store/meta-reducers";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/ducks/auth/auth.effects";
import {extModules} from "./store/extension";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(Reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    extModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
