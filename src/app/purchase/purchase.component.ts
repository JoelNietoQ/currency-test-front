import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase, Transaction } from '../models/purchase.model';
import { ExchangeService } from '../services/exchange.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.sass'],
})
export class PurchaseComponent implements OnInit {
  brlExchange: Observable<string[]>;
  usdExchange: Observable<string[]>;
  transaction: Purchase = {};
  result: Transaction;
  loading = false;
  constructor(private service: ExchangeService) {}

  ngOnInit(): void {
    this.getExchange();
  }

  getExchange() {
    this.brlExchange = this.service.getExchange('BRL');
    this.usdExchange = this.service.getExchange('USD');
  }

  purchase() {
    this.loading = true;
    this.service.purchase(this.transaction).subscribe(
      (res) => {
        this.result = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
