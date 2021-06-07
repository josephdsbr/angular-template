import {ErrorHandler, NgModule} from '@angular/core';
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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PagesModule} from "./pages/pages.module";
import {HttpClientModule} from "@angular/common/http";
import {PipeModule} from "./pipe/pipe.module";
import {ToastrModule} from "ngx-toastr";
import {GlobalErrorHandler} from "./exception/handlers/global-error-handler";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot(Reducers, { metaReducers: metaReducers }),
    extModules,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    CoreModule,
    PipeModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
