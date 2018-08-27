import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Organisation} from '../../model/organisation';

@Component({
  selector: 'app-tjansteanteckningar-organisation',
  templateUrl: './tjansteanteckningar-organisation.component.html',
  styleUrls: ['./tjansteanteckningar-organisation.component.css']
})
export class TjansteanteckningarOrganisationComponent implements OnInit {
  organisation: Organisation = new Organisation();
  private buttonTextExpand = 'Organisation-tjänsteanteckningar - VISA';
  private buttonTextCollapse = 'Organisation-tjänsteanteckningar - DÖLJ';
  public isCollapsed = true;
  public buttonText = this.buttonTextExpand;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.organisation.subscribe(res => this.organisation = res);
  }

  toggle() {
    if (this.isCollapsed) {
      this.buttonText = this.buttonTextCollapse;
      this.isCollapsed = false;
    } else {
      this.buttonText = this.buttonTextExpand;
      this.isCollapsed = true;
    }
  }
}
