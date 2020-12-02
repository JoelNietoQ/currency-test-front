import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Purchase, Transaction } from '../models/purchase.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlAPI;
  }

  public getExchange(currency: string) {
    return this.http.get<any>(this.url + currency);
  }

  public getTransactions() {
    return this.http.get<Transaction[]>(this.url + 'Transactions');
  }

  public purchase(purchase: Purchase) {
    return this.http.post<Transaction>(this.url + 'Purchase', purchase);
  }
}
