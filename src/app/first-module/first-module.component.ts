import { Component, OnInit } from '@angular/core';
import { Invoice, KeyValue } from '../interfaces/invoice';
import { CurrencyService } from '../currency.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as uuid from 'uuid';

@Component({
  selector: 'app-first-module',
  templateUrl: './first-module.component.html',
  styleUrls: ['./first-module.component.scss']
})
export class FirstModuleComponent implements OnInit {

  invoiceForm: FormGroup;
  invoices: Invoice[];
  currencies: KeyValue[];
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private currencyService: CurrencyService
  ) {
  }

  ngOnInit(): void {
    this.invoiceForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      value: new FormControl(null, [Validators.required, Validators.min(1)]),
      currency: new FormControl(null, [Validators.required]),
      status: false,
    });
    this.invoices = [];
    this.currencies = this.currencyService.getCurrencyArray();
    this.submitted = false;
  }

  get f() {
    return this.invoiceForm.controls;
  }

  clearForm(): void {
    this.submitted = false;
    this.invoiceForm.reset();
  }

  submit(): void {

    this.submitted = true;

    if (this.invoiceForm.invalid) {
      return;
    }

    this.invoices.push({
      id: uuid.v4(),
      name: this.invoiceForm.get('name').value,
      value: this.invoiceForm.get('value').value,
      currency: this.invoiceForm.get('currency').value,
      status: this.invoiceForm.get('status').value
    });
    this.clearForm();
  }

}
