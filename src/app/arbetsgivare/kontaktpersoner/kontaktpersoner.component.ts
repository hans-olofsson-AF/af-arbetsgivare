import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Arbetsplats} from '../../model/arbetsplats';

@Component({
  selector: 'app-kontaktpersoner',
  templateUrl: './kontaktpersoner.component.html',
  styleUrls: ['./kontaktpersoner.component.css']
})
export class KontaktpersonerComponent implements OnInit {
  arbetsplats: Arbetsplats = new Arbetsplats();

  constructor(private state: StateService) { }

  ngOnInit() {
   this.state.arbetsplats.subscribe(res => this.arbetsplats = res);
  }
}
