import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { filter, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  login: string;
  password: string;
  isDeleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService{
  userDetails: User[];
  constructor(private http: HttpClient) {
   }

   getDataOfActiveUser(){
    return this.http.get<any[]>('http://localhost:8080/users').pipe(
      map((val) => {return (val.filter((data) => data["isDeleted"] == false))}),
    );
  }

  getDataOfDeactiveUser(){
    return this.http.get<any[]>('http://localhost:8080/users').pipe(
      map((val) => {return (val.filter((data) => data["isDeleted"] == true))}),
    );
  }
  getUsers(){
    return this.http.get<any[]>('http://localhost:8080/users');
  }

  getUserDetail(id){
    return this.http.get<any[]>('http://localhost:8080/users/'+id);
  }

  updateDetail(user: Partial<User>){
    let url ='http://localhost:8080/users/'+user["id"];
    delete user["id"];
    return this.http.put(url,user);
  }

  createUser(user: Partial<User>){
    let url ='http://localhost:8080/users/'
    return this.http.post(url,user);
  }


  
}



