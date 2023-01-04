import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  constructor(private service: BackendService) {
    // this.addEmpForm: FormGroup;
    this.empId = 0;
  };

  ngOnInit(): void {
    // this.addEmpForm = new FormGroup({
    //   name: new FormControl(''),
    //   userName: new FormControl(''),
    //   email: new FormControl('')
    // });
  }

  addEmpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl('')
  });

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

  addEmp = () => {
    console.log(this.addEmpForm.value);
    this.service.addEmployee(this.addEmpForm.value)
      .subscribe((response) => {
        this.empData = response.valueOf();
        alert(`Eid ${this.empData.id} added successfully.`);
      });
  };

}
