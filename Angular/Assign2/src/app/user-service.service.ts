import { Injectable } from '@angular/core';

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
  constructor() {
    this.userDetails = [
      {id:'1',firstName:'Ankit',lastName:'User 1',age:10,login:'User 1',password:'123',isDeleted:false},
      {id:'2',firstName:'Krishna',lastName:'User 2',age:12,login:'User 2',password:'123',isDeleted:true},
      {id:'3',firstName:'Virat',lastName:'User 3',age:13,login:'User 3',password:'123',isDeleted:false},
      {id:'4',firstName:'Kohli',lastName:'User 4',age:20,login:'User 4',password:'123',isDeleted:true},
      {id:'5',firstName:'Lohni',lastName:'User 5',age:14,login:'User 5',password:'123',isDeleted:false},
      {id:'6',firstName:'Sony',lastName:'User 6',age:16,login:'User 6',password:'123',isDeleted:true},
      {id:'7',firstName:'Tony',lastName:'User 7',age:12,login:'User 7',password:'123',isDeleted:false},
      {id:'8',firstName:'Monu',lastName:'User 8',age:11,login:'User 8',password:'123',isDeleted:false},
      {id:'9',firstName:'Sonu',lastName:'User 8',age:9,login:'User 9',password:'123',isDeleted:true}
    ];
   }

   getDataOfActiveUser(){
    return this.userDetails.filter((u) => u.isDeleted == false);
  }

  getDataOfDeactiveUser(){
    return this.userDetails.filter((u) => u.isDeleted == true);
  }
  getUsers(){
    return this.userDetails;
  }
}
