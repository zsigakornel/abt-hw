export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  HUF = 'HUF'
}

export interface Invoice {
  id: string;
  name: string;
  value: number;
  currency: Currency;
  status: boolean;
}

export interface KeyValue {
  key: string;
  value: string;
}
