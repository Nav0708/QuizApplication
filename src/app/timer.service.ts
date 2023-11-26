import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private counter: number = 60;
  timer$ = new Subject<number>();

  constructor() {
    interval(1000).subscribe(() => {
      if (this.counter > 0) {
        this.counter--;
        this.timer$.next(this.counter);
      } else {
        
      }
    });
  }

  getCounter(): number {
    return this.counter;
  }
}
