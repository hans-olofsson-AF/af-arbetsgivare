import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HemComponent } from './hem/hem.component';
import { OmComponent } from './om/om.component';
import { ArbetsgivareModule } from './arbetsgivare/arbetsgivare.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {ArbetsgivareService} from './services/arbetsgivare.service';
import {StateService} from './services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HemComponent,
    OmComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ArbetsgivareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
