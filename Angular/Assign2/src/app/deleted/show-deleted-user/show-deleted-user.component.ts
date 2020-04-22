import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-show-deleted-user',
  templateUrl: './show-deleted-user.component.html',
  styleUrls: ['./show-deleted-user.component.css']
})
export class ShowDeletedUserComponent implements OnInit {

  public users;
  constructor(private userList: UserServiceService) { }

  ngOnInit(): void {
  }
}
