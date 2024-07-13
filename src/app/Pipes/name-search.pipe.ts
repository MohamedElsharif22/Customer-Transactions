import { Pipe, PipeTransform } from '@angular/core';
import { CustomerTransactions } from '../Interfaces/customer-transactions';

@Pipe({
  name: 'nameSearch',
})
export class NameSearchPipe implements PipeTransform {
  transform(CustumerTrans: CustomerTransactions[], input: string): CustomerTransactions[] {
    if (input) {
      return CustumerTrans.filter((C) =>
        C.customer_name.toLowerCase().includes(input.toLowerCase())
      );
     }
    return CustumerTrans;
  }
}
