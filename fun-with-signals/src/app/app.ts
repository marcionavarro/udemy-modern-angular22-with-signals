import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { mySignal } from './my-signal';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly firstSignal = signal(42);
  readonly secondSignal = signal('Signals');
  readonly thirdSignal = signal(10);

  readonly derived = computed(() => this.firstSignal() + this.thirdSignal());

  setSignal() {
    this.firstSignal.set(10);
    this.firstSignal.update((value) => value + 1);
    this.secondSignal.set('Hello');
  }

  updateSignal() {
    this.firstSignal.update((value) => value + 1);
  }

  constructor() {
    effect(() => {
      console.log('The first signal value is: ', this.firstSignal());
      console.log('The second signal value is: ', this.secondSignal());
      this.secondSignal.set('Some Value');
    });
  }
}
