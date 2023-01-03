import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  dataUrl = './assets/users.json';

  // http requests 
  // GET, POST, ... 

  // 

  getEmployeeById = (eid: number) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${eid}`);
  };

  getUserData = () => {
    return this.http.get(this.dataUrl);
  };

  constructor(private http: HttpClient) { }
}



// https://angular.io/guide/http
