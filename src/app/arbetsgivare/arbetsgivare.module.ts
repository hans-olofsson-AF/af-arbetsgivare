import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ArbetsgivareComponent } from '../arbetsgivare/arbetsgivare.component';
import { ArbetsplatserComponent } from './arbetsplatser/arbetsplatser.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ArbetsplatsComponent } from './arbetsplats/arbetsplats.component';
import { KontaktpersonerComponent } from './kontaktpersoner/kontaktpersoner.component';
import { OrdersComponent } from './orders/orders.component';
import { TjansteanteckningarOrganisationComponent } from './tjansteanteckningar-organisation/tjansteanteckningar-organisation.component';
import { TjansteanteckningarArbetsplatsComponent } from './tjansteanteckningar-arbetsplats/tjansteanteckningar-arbetsplats.component';

import {ArbetsgivareService} from '../services/arbetsgivare.service';
import {StateService} from '../services/state.service';

@NgModule({
  declarations: [
    ArbetsgivareComponent,
     ArbetsplatserComponent,
     OrganisationComponent,
     ArbetsplatsComponent,
     KontaktpersonerComponent,
     OrdersComponent,
     TjansteanteckningarOrganisationComponent,
     TjansteanteckningarArbetsplatsComponent
    ],
    imports: [
      BrowserModule,
      NgbModule,
      FormsModule,
      HttpClientModule,
    ],
    providers: [StateService, ArbetsgivareService],
})
export class ArbetsgivareModule { }
