import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user ;
  @Input() anchorName;
  @Output() invertActivationStatus = new EventEmitter<string>();
  buttonClass:string;
  cardClass:string;
  constructor(private userList: UserServiceService,private router: Router) {
   }

  ngOnInit(): void {
    this.buttonClass= "btn ";
    this.cardClass = "card ";
    // console.log("user = "+this.user.firstName);
    this.buttonClass += this.anchorName != "Manage"?(this.anchorName === "Activate"?"btn-danger":"btn-success"):"btn-primary";
    this.cardClass += this.user["isDeleted"] == false?"card-green":"card-red";

    
  }

  invertActivationId(id :any){
    this.invertActivationStatus.emit(id);
  }

  updateUser(id:string){
    this.router.navigate(['manage/form/update',id]);
   }
}
