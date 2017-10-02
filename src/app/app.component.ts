import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Sumit Patel</h1><app-another></app-another><app-new></app-new>`,
  styles: [`h1{color:red;}`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular App';
}
