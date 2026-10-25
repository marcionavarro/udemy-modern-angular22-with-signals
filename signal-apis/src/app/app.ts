import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RATES } from './component/currency-converter/rates';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverter } from './component/currency-converter/currency-converter';

@Component({
  imports: [CurrencyConverter, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly currencies = Object.keys(RATES);

  amount = new FormControl(100);

  currency = new FormControl('USD');

  refreshData() {
    console.log('refreshData');
  }
}
