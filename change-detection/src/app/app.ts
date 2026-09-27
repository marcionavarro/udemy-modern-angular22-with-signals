import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, firstValueFrom, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly a$ = new BehaviorSubject<number>(1);
  readonly b$ = new BehaviorSubject<number>(2);
  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(map(([a, b]) => a + b));

  async incA() {
    // only increment A if A + B is less than 10

    if (this.a$.value + this.b$.value < 10) {
      const sum = await firstValueFrom(this.sum$);
      if (sum < 10) {
        this.a$.next(this.a$.value + 1);
      }
    }
  }

  readonly options$ = new BehaviorSubject<Options>({ r: 'Red', g: 'Green', b: 'Blue' });
  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]),
  );

  switchOptions() {
    this.options$.next({ m: 'Magenta', y: 'Yellow', c: 'Cyan' });
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }
}
