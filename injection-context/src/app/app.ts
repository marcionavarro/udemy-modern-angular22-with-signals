import { Component } from '@angular/core';
import { Counter } from './counter/counter';

@Component({
  imports: [Counter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
