import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  constructor() {
    const myVariable = 10;
    myVariable = 'Soy un string muy endiablado';
  }
}
