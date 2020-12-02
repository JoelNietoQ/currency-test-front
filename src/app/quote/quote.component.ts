import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass'],
})
export class QuoteComponent implements OnInit {
  brlExchange: Observable<string[]>;
  usdExchange: Observable<string[]>;
  constructor(private service: ExchangeService) {}

  ngOnInit(): void {
    this.getExchange();
  }

  getExchange() {
    this.brlExchange = this.service.getExchange('BRL');
    this.usdExchange = this.service.getExchange('USD');
  }
}
