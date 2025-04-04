import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { Transaction } from '../transaction.model';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: false,
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent {
  transactionForm: FormGroup;
  transactionTypes = ['BUY', 'SELL', 'DIVIDEND'];

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
    this.transactionForm = this.fb.group({
      stockName: ['', Validators.required],
      type: ['BUY', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      date: [new Date(), Validators.required]
    });
  }

  submitTransaction() {
    if (this.transactionForm.valid) {
      this.transactionService.addTransaction(this.transactionForm.value).subscribe(() => {
        alert('Transaction recorded successfully!');
        this.transactionForm.reset();
      });
    }
  }
}
