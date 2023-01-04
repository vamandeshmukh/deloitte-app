// // reactive form with validations 
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;

//   // 1 
//   constructor(private formBuilder: FormBuilder) {
//     this.loginForm = formBuilder.group({
//       userName: ['', Validators.required, {updateOn: 'blur'}],
//       password: ['', Validators.required, {updateOn: 'blur'}]
//     });

//   };

//   loggedInData = {
//     userName: '',
//     password: ''
//   };

//   // 2 
//   ngOnInit(): void {
//     this.loginForm = new FormGroup({
//       userName: new FormControl(''),
//       password: new FormControl('')
//     });
//   }

//   submitLogin = () => {
//     this.loggedInData = this.loginForm.value;
//     console.log(this.loginForm.value);
//   };

// }


// reactive form 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  // 1 
  constructor() {
    this.loginForm = new FormGroup({});
  };

  loggedInData = {
    userName: '',
    password: ''
  };

  // 2 
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitLogin = () => {
    this.loggedInData = this.loginForm.value;
    console.log(this.loginForm.value);
  };

}

// https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit


// method === function === hook === subroutine === routine 

// angular lifecycle hooks 



// template-driven form 
// import { Component} from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent  {

//   loggedInData = {
//     userName: '',
//     password: ''
//   };

//   submittedData = {
//     userName: '',
//     password: ''
//   };

//   submitLogin = (login: any) => {
//     console.log(login.value);
//     this.submittedData = login.value;
//   };

// }










 