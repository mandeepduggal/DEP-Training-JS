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
  public activityState:string;

  constructor(private userService: UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
     this.userService.getUserDetail(id).subscribe(
      (result)=>{this.user = result;
        // console.log(this.user);
      this.activityState = this.user.isDeleted == true?"active":"deleted";
      },
      (error) => {console.log("Error -",error)},
      () =>{console.log("Completed")}
    );
    this.route.params.subscribe((params) => {
      
      this.userService.getUserDetail(params['id']).subscribe(
        (result)=>{this.user = result; 
          // console.log(this.user);
        this.activityState = this.user.isDeleted == false?"active":"deleted";
        },
        (error) => {console.log("Error -",error)},
        () =>{console.log("Completed")}
      );
        
    });
    console.log(this.user);
  }

}
