import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h2>TEST</h2>', // mozna jawnie w ten sposob, ale czesciej robi się to poprzez odrebny plik
                             // w tym przypadku:  app.component.html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatFront2';
}
