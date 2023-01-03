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
  getUserData = () => {
    return this.http.get(this.dataUrl);
  };

  constructor(private http: HttpClient) { }
}



// https://angular.io/guide/http
