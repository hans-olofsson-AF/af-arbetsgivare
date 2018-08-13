import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HemComponent} from './hem/hem.component';
import {OmComponent} from './om/om.component';
import {ArbetsgivareComponent} from './arbetsgivare/arbetsgivare.component';

const routes: Routes = [
  {path: '', redirectTo: '/hem', pathMatch: 'full'},
  {path: 'hem', component: HemComponent},
  {path: 'arbetsgivare', component: ArbetsgivareComponent},
  {path: 'om', component: OmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
