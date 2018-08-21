import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.css']
})
export class OmComponent implements OnInit {
  public isCollapsed = false;
  public buttonText = 'Dölj';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.isCollapsed) {
      this.buttonText = 'Dölj';
      this.isCollapsed = false;
    } else {
      this.buttonText = 'Visa';
      this.isCollapsed = true;
    }
  }
}
