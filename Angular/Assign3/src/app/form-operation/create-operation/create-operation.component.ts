import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-operation',
  templateUrl: './create-operation.component.html',
  styleUrls: ['./create-operation.component.css']
})
export class CreateOperationComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl('',Validators.pattern("[0-9]+")),
  });
  constructor(private userService: UserServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  createUser() {
    this.userService.createUser(this.createForm.value).subscribe(
      (result)=>{return result},
      (error) => {alert("Error - "+error)},
      () => {this.createForm.reset()});
  }

}
