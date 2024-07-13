import { Component } from '@angular/core';
import { CustomerTransactions } from 'src/app/Interfaces/customer-transactions';
import { Customer } from 'src/app/Interfaces/Custsomer';
import { Transaction } from 'src/app/Interfaces/Transaction';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss'],
})
export class CustomersTableComponent {
  Customers: Customer[] = [];
  Transactions: Transaction[] = [];
  CustomerTransactions: CustomerTransactions[] = [];

  constructor(private _DataService: DataService) {
    this._DataService.getData().subscribe((res) => {
      console.log(res);
      this.Customers = res.customers;
      this.Transactions = res.transactions;
      this.transformData(this.Customers, this.Transactions)
    });
  }

  transformData(cus: Customer[], trans: Transaction[]): void {
    for (let i = 0, n = cus.length; i < n; i++) {
      for (let j = 0, n1 = trans.length; j < n1; j++) {
        if (cus[i].id === trans[j].customer_id) {
          let newCusTrans: CustomerTransactions = {
            id: j,
            customer_id: cus[i].id,
            customer_name: cus[i].name,
            transaction_id: trans[j].id,
            transaction_date: trans[j].date,
            amount: trans[j].amount,
          };

          this.CustomerTransactions.push(newCusTrans);
        }
      }
    }
  }
}
