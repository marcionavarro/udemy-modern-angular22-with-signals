import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class App {
  readonly counter$ = interval(1000);

  calculateValue() {
    console.log('Value is calculed');
    return 42;
  }

  constructor() {}
}
