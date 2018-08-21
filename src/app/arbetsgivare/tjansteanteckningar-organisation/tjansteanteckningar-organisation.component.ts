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

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.organisation.subscribe(res => this.organisation = res);
  }
}
