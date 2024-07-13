import { Pipe, PipeTransform, Input } from '@angular/core';
import { CustomerTransactions } from '../Interfaces/customer-transactions';

@Pipe({
  name: 'amountSearch',
})
export class AmountSearchPipe implements PipeTransform {
  transform(
    cusTrans: CustomerTransactions[],
    input?: number
  ): CustomerTransactions[] {
    if (input) {
      return cusTrans.filter(c => c.amount === input)
    }
    return cusTrans;
  }
}
