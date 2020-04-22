import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-show-active-user',
  templateUrl: './show-active-user.component.html',
  styleUrls: ['./show-active-user.component.css']
})
export class ShowActiveUserComponent implements OnInit {

  public users;
  constructor(private userList: UserServiceService) { }


  
  ngOnInit(): void {
  }


}
