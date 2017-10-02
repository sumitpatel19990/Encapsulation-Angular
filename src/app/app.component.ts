import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Sumit Patel</h1><app-another><h2>Hello</h2><p>How u?</p></app-another><app-another><h1>india</h1><p>Uk</p></app-another><app-new></app-new><app-new></app-new>`,
  styles: [`h1{color:red;}`]
})
export class AppComponent {
  title = 'Angular App';
}
