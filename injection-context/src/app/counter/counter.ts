import {
  Component,
  DestroyRef,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { interval } from 'rxjs';
import { startCounting } from '../util';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  private dr = inject(DestroyRef);
  private injector = inject(Injector);

  constructor() {
    // startCounting();
  }

  ngOnInit() {
    // startCounting(this.dr);
    runInInjectionContext(this.injector, () => startCounting());
  }
}
