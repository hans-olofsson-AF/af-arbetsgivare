import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Organisation} from '../../model/organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})

export class OrganisationComponent implements OnInit {
  organisation: Organisation = new Organisation();
  errorMessage: string;
  orgnr = '';

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.organisation.subscribe(res => this.organisation = res);
    this.state.errorMessageOrganisation.subscribe(res => this.errorMessage = res);
  }

  getOrganisation() {
    this.state.loadOrganisation(this.orgnr);
  }

}
