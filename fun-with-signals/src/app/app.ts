import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { mySignal } from './my-signal';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  // readonly firstSignal = signal(42);
  // readonly secondSignal = signal('Signals');

  readonly firstSignal = mySignal(42);
  readonly secondSignal = mySignal('Signals');

  setSignal() {
    this.firstSignal.set(10);
  }

  updateSignal() {
    //this.firstSignal.set(this.firstSignal() + 1);
    this.firstSignal.update((value) => value + 1);
  }

  constructor() {
    console.log('The first signal value is: ', this.firstSignal());
    console.log('The second signal value is: ', this.secondSignal());
  }
}
