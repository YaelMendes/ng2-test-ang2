import {
  Component,
  OnInit,
  Input, EventEmitter      // <--- added this
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  inputs: ['name', 'myVar'],
  outputs: ['myEvent'],
  template: `
   <label>name: </label><span>{{name}}</span>
   <label>myVar: </label><span>{{myVar}}</span>
   (onProductSelected)="productWasSelected($event)">
    <br/>
  `,
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
   name: string; // <-- added Input annotation
   myVar: string;

   myEvent = new EventEmitter();

  constructor() {
    // removed setting name
  }

  ngOnInit() {
  }

  productWasSelected(product: string): void {
    console.log('Product clicked: ', product);
  }

}
