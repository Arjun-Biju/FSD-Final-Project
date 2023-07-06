import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  baseURL = "https://localhost:7155/"
  // login(username:string, password:string){
  //   var formData = new FormData();
  //   formData.append('email',username)
  //   formData.append('password',password)

    // return this.http.get(this.baseURL + '/api/User/Login', formData)
  // }
}
