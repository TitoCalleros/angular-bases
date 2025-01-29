import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseCounter()"> +1 </button>
    <button (click)="resetCounter()"> Reset </button>
    <button (click)="increaseCounter(-1)"> -1 </button>
    `,
  standalone: false,
})

export class CounterComponent {
  public counter: number = 10;

  increaseCounter(value: number = 1): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}



