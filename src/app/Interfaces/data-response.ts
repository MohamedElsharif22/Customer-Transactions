import { Customer } from './Custsomer';
import { Transaction } from './Transaction';

export interface DataResponse {
  customers: Customer[];
  transactions: Transaction[];
}
