import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbetsgivareComponent } from '../arbetsgivare/arbetsgivare.component';
import { ArbetsplatserComponent } from './arbetsplatser/arbetsplatser.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { ArbetsplatsComponent } from './arbetsplats/arbetsplats.component';
import { KontaktpersonerComponent } from './kontaktpersoner/kontaktpersoner.component';
import { OrdersComponent } from './orders/orders.component';
import { TjansteanteckningarOrganisationComponent } from './tjansteanteckningar-organisation/tjansteanteckningar-organisation.component';
import { TjansteanteckningarArbetsplatsComponent } from './tjansteanteckningar-arbetsplats/tjansteanteckningar-arbetsplats.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ArbetsgivareComponent,
     ArbetsplatserComponent,
     OrganisationComponent,
     ArbetsplatsComponent,
     KontaktpersonerComponent,
     OrdersComponent,
     TjansteanteckningarOrganisationComponent,
     TjansteanteckningarArbetsplatsComponent]
})
export class ArbetsgivareModule { }
