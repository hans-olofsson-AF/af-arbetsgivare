import { Component, OnInit } from '@angular/core';

import { StateService } from '../../services/state.service';

import { Arbetsplats } from '../../model/arbetsplats';
import { OrderMini } from '../../model/orderMini';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public arbetsplats: Arbetsplats = new Arbetsplats();
  private buttonTextExpand = 'Arbetsplats-ordrar - VISA';
  private buttonTextCollapse = 'Arbetsplats-ordrar - DÖLJ';
  public isCollapsed = true;
  public buttonText = this.buttonTextExpand;

  constructor(private state: StateService) {}

  ngOnInit() {
    this.state.arbetsplats.subscribe(res => (this.arbetsplats = res));
  }

  onClick(ordersMini: OrderMini) {
    console.log('klickad order: ' + ordersMini.id);
    // this.state.loadArbetsplats(arbetsplatsMini.kundnr);
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
