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
  private buttonTextExpand = 'Arbetsplats-kontaktpersoner - VISA';
  private buttonTextCollapse = 'Arbetsplats-kontaktpersoner - DÖLJ';
  public isCollapsed = false;
  public buttonText = this.buttonTextCollapse;

  constructor(private state: StateService) { }

  ngOnInit() {
   this.state.arbetsplats.subscribe(res => this.arbetsplats = res);
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
