import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  // dataUrl: string = './assets/users.json';
  httpUrl: string = 'https://jsonplaceholder.typicode.com/users';

  getEmployeeById = (eid: number) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${eid}`);
  };

  getAllEmployees = () => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/`);
  };

  addEmployee = (emp: any) => {
    return this.http.post(this.httpUrl, emp);
  };

}



// https://angular.io/guide/http
