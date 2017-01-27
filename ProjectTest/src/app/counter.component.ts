import {Component} from "@angular/core";

@Component({
  selector: 'my-counter',
  template: `
 {{ value }}
 <button (click)="increase()">Increase</button>
 <button (click)="decrease()">Decrease</button>
 `
})
export class CounterComponent {
  value: number;

  constructor() {
    this.value = 1;
  }

  increase() {
    this.value = this.value + 1;
    return false;
  }

  decrease() {
    this.value = this.value - 1;
    return false;
  }
}
