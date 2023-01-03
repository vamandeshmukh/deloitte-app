import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(private service: BackendService) {
    this.empId = 0;
  };

  empId: any;

  empData: any = {
    id: '',
    name: '',
    username: '',
    email: ''
  };

  allEmps: any = [];

  setEid = ($event: any) => {
    console.log($event);
    this.empId = $event.target.value;
  }

  getEmpById = () => { // 
    this.service.getEmployeeById(this.empId)
      .subscribe({
        next: (response) => { this.empData = response.valueOf() },
        error: (error) => { console.log(error); },
        complete: () => { console.log('finally done!'); }
      });
  };

  getAllEmps = () => {
    this.service.getAllEmployees()
      .subscribe((response) => { this.allEmps = response.valueOf() });
  };

}
