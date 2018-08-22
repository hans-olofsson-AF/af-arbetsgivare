import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.css']
})
export class OmComponent implements OnInit {
  private buttonTextExpand = 'Visa information';
  private buttonTextCollapse = 'Dölj information';
  public isCollapsed = false;
  public buttonText = this.buttonTextCollapse;

  constructor() { }

  ngOnInit() {
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
