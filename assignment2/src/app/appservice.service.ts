import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  udetailId: any;

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUserdetails(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  }
}
