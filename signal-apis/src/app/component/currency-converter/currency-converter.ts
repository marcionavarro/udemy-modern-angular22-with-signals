import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  OnChanges,
  output,
  Output,
} from '@angular/core';
import { RATES } from './rates';
import { BehaviorSubject, interval, map, startWith, switchMap } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [CommonModule],
  selector: 'app-currency-converter',
  styleUrl: './currency-converter.scss',
  templateUrl: './currency-converter.html',
})
export class CurrencyConverter {
  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);
  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() => interval(5000).pipe(startWith(0))),
    map(() => {}),
    takeUntilDestroyed(),
  );

  readonly refreshRequired = outputFromObservable(this.refreshRequired$);

  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
}
