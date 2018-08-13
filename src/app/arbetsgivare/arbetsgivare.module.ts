import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbetsgivareComponent } from '../arbetsgivare/arbetsgivare.component';
import { ArbetsplatserComponent } from './arbetsplatser/arbetsplatser.component';
import { OrganisationComponent } from './organisation/organisation.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ArbetsgivareComponent, ArbetsplatserComponent, OrganisationComponent]
})
export class ArbetsgivareModule { }
