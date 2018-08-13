import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HemComponent} from './hem/hem.component';
import {OmComponent} from './om/om.component';
import {ArbetsgivareComponent} from './arbetsgivare/arbetsgivare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/hem', pathMatch: 'full'},
  {path: 'hem', component: HemComponent},
  {path: 'arbetsgivare', component: ArbetsgivareComponent},
  {path: 'om', component: OmComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
