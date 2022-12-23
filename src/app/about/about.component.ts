import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  myName = 'Kasyap';
  mySalary = 100.25;

  myNums = [25, 31, 9, 22];

  empList = [
    { eid: 101, fName: 'Sonu', salary: 90000 },
    { eid: 102, fName: 'Monu', salary: 95000 },
    { eid: 103, fName: 'Tonu', salary: 99000 },
    { eid: 104, fName: 'Gonu', salary: 98000 },
  ];

}
