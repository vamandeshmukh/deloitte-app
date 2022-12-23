import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  empList = [
    { eid: 101, fName: 'Sonu', salary: 90000 },
    { eid: 102, fName: 'Monu', salary: 95000 },
    { eid: 103, fName: 'Tonu', salary: 99000 },
    { eid: 104, fName: 'Gonu', salary: 98000 },
  ];

  myNums = [25, 31, 9, 22];

  Object = Object;

  myObj = {
    "id": 834,
    "first_name": "GS",
    "last_name": "Shahid",
    "phone": "03215110224",
    "role": null,
    "email": "test@example.com",
    "picture": {
      "url": null,
      "thumb": {
        "url": null
      }
    },
    "address": "Nishtar Colony",
    "city_id": 2,
    "provider": "email",
    "uid": "test@example.com"
  }


}
