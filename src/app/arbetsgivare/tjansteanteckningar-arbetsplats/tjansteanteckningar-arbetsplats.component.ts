import { Component, OnInit } from '@angular/core';

import {StateService} from '../../services/state.service';

import {Arbetsplats} from '../../model/arbetsplats';

@Component({
  selector: 'app-tjansteanteckningar-arbetsplats',
  templateUrl: './tjansteanteckningar-arbetsplats.component.html',
  styleUrls: ['./tjansteanteckningar-arbetsplats.component.css']
})
export class TjansteanteckningarArbetsplatsComponent implements OnInit {
  arbetsplats: Arbetsplats = new Arbetsplats();

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.arbetsplats.subscribe(res => this.arbetsplats = res);
  }
}
