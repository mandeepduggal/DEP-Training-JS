import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user;

  constructor(private userList: UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.user = this.userList.userDetails.find((u) => u.id == id);
    this.route.params.subscribe((params) => {
      
    this.user = this.userList.userDetails.find((u) => u.id == params['id']);
    });
  }

}
