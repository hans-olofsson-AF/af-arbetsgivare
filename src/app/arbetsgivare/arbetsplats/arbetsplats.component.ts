import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Arbetsplats} from '../../model/arbetsplats';

@Component({
  selector: 'app-arbetsplats',
  templateUrl: './arbetsplats.component.html',
  styleUrls: ['./arbetsplats.component.css']
})
export class ArbetsplatsComponent implements OnInit {
  arbetsplats: Arbetsplats = new Arbetsplats;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.arbetsplats.subscribe(res => this.arbetsplats = res);
  }
}
