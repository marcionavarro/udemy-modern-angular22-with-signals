import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly names = signal(['Alice', 'Bob', 'Charlie']);
  readonly person = signal({ name: 'Alice', age: 30 });

  constructor() {
    setTimeout(() => {
      // this.names().push('David');
      this.names.update((names) => [...names, 'David']);
      // this.names.update((names) => names);

      this.person.update((person) => ({ ...person, name: 'David' }));

      console.log('Adding David to the list of names', this.names());
    }, 2000);

    effect(() => {
      console.log('The names are', this.person());
    });
  }
}
