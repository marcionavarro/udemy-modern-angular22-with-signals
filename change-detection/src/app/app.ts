import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  counter = 0;

  readonly changeDetector = inject(ChangeDetectorRef);

  doNothing() { }

  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter: ', this.counter);

    }, 1000);

    setInterval(() => {
      this.changeDetector.detectChanges();
    }, 5000)
  }
}
