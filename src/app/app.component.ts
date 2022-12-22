import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deloitte-app';
  firstName = 'Sonu';
  salary = 100;

  getFun = () => {
    console.log('event binding');
   };

}
