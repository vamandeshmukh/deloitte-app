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

  setEid = ($event: any) => {
    console.log($event);
    this.empId = $event.target.value;
  }

  getEmpById = () => {
    this.service.getEmployeeById(this.empId)
      .subscribe(response => {
        console.log(response);
        this.empData = response.valueOf()
      });
    console.log(this.empData);
  };

}
