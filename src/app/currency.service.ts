import { Injectable } from '@angular/core';
import { Currency, KeyValue } from './interfaces/invoice';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() {
  }

  getCurrencyArray(): KeyValue[] {
    const currencyValues: KeyValue[] = [];
    for (const currencyKey of Object.keys(Currency)) {
      currencyValues.push({key: currencyKey, value: Currency[currencyKey]});
    }
    return currencyValues;
  }
}
