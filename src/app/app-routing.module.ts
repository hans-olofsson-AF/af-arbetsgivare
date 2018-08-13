import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HemComponent} from './hem/hem.component';
import {OmComponent} from './om/om.component';

const routes: Routes = [
  {path: '', redirectTo: '/hem', pathMatch: 'full'},
  {path: 'hem', component: HemComponent},
  {path: 'om', component: OmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
