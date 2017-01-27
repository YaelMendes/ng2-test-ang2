import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  variable : number;

  names: string[];
  param: string;

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    this.param = "Wazaaaa from appComponent (bis)";
  }

  i = 0;
  i2 = 0;

  compute() {
    this.variable =  ++this.i+this.i2++;
  }


}
