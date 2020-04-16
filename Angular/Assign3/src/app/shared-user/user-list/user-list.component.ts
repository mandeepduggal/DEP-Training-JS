import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userList :any[];
  constructor(private userService : UserServiceService,private router:Router) { }
  @Input () isDeactivate ;
  public anchorName ;
  ngOnInit(): void {
    console.log("user-list OnInit : ",this.isDeactivate);
    this.isDeactivate == undefined ? this.getUsers() : this.isDeactivate == "false"? this.getDataOfActiveUser():this.getDataOfDeactiveUser();
    this.anchorName = this.isDeactivate == undefined ? "Manage" : this.isDeactivate == "false"? "Activate":"Deactivate";
  }


  getUsers(){
    this.userService.getUsers().subscribe(
      (result)=>{this.userList = result; },
      (error) => {console.log("Error -",error)},
      () =>{console.log("Completed")}
    );
  }
  
  getDataOfActiveUser(){
    this.userService.getDataOfActiveUser().subscribe(
      (result)=>{this.userList = result; 
      console.log(result);
      },
      (error) => {console.log("Error -",error)},
      () =>{console.log("Completed")}
    );
  }

  getDataOfDeactiveUser(){
    this.userService.getDataOfDeactiveUser().subscribe(
      (result)=>{this.userList = result; 
      console.log(result);
      },
      (error) => {console.log("Error -",error)},
      () =>{console.log("Completed")}
    );
  }

  invertActivationStatus(id: string) {
    if(this.isDeactivate == undefined){
      this.getUserDetail(id)
    }
    else {
    this.userService.updateDetail({"id":id,"isDeleted":(this.isDeactivate == 'false')}).subscribe(
      (result)=>{console.log("Result: "+result);},
      (error) => {console.log("Error -",error)},
      () =>{this.isDeactivate == "false"? this.getDataOfActiveUser():this.getDataOfDeactiveUser();});
    }
   }

   getUserDetail(id){
    this.router.navigate(['manage',id]);
   }

   createNewUser(){
    this.router.navigate(['manage/form/create']);
   }




}
