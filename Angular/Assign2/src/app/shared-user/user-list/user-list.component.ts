import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userList;
  constructor(private userService : UserServiceService,private router:Router) { }
  @Input () isDeactivate ;
  public anchorName ;
  ngOnInit(): void {
    console.log(this.isDeactivate);
    this.isDeactivate == undefined ? this.getUsers() : this.isDeactivate == "false"? this.getDataOfActiveUser():this.getDataOfDeactiveUser();
    this.anchorName = this.isDeactivate == undefined ? "Manage" : this.isDeactivate == "false"? "Activate":"Deactivate";
  }

  getUsers(){
    this.userList = this.userService.getUsers()
  }
  
  getDataOfActiveUser(){
    this.userList = this.userService.getDataOfActiveUser()
  }

  getDataOfDeactiveUser(){
    this.userList = this.userService.getDataOfDeactiveUser()
  }

  invertActivationStatus(id: string) {
    if(this.isDeactivate == undefined){
      this.getUserDetail(id)
    }
    else {
    this.userList.filter((u) => {if(u.id == id){u.isDeleted = !u.isDeleted}});
     this.isDeactivate == "false"? this.getDataOfActiveUser():this.getDataOfDeactiveUser();
    }
   }

   getUserDetail(id){
    this.router.navigate(['manage',id]);
   }
}
