import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  readonly number = signal(10);
  readonly number$ = toObservable(this.number);

  readonly results$ = this.number$.pipe(
    switchMap(n => this.api.getPrimeFactors(n))
  )

  readonly api = inject(ApiService);

  readonly primeFactors = toSignal(this.results$, {
    initialValue: [],
    manualCleanup: false
  });

  increase() {
    this.number.update(n => n + 1);
  }

  decrease() {
    this.number.update(n => Math.max(n - 1, 3));
  }

  constructor() {
    /* this.number$.subscribe(n => {
      console.log('Observable subscription 1', n);
    });
    setTimeout(() => {
      this.number$.subscribe(n => {
        console.log('Creating 2ngd subscription', n);
        console.log('Observable subscription 1', n);
      });
    }, 5000) */
  }

  ngOnInit() {
  }
}
