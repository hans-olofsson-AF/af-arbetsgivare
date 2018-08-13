import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HemComponent } from './hem/hem.component';
import { OmComponent } from './om/om.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HemComponent,
    OmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
