import { Injectable } from '@angular/core';
import { Transaction } from '../transaction/transaction.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [];
  private url = "";

  constructor() { 
    this.loadTransactions();
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Transaction): Observable<any> {
    this.transactions.push(transaction);
    this.saveTransactions();
    return Observable.arguments(1);
  }

  private saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }

  private loadTransactions() {
    const data = localStorage.getItem('transactions');
    if (data) {
      this.transactions = JSON.parse(data);
    }
  }
}
