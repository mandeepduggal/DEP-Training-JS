import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user ;
  @Input() anchorName;
  @Output() invertActivationStatus = new EventEmitter<string>();
  buttonClass= "btn ";
  cardClass = "card ";
  buttonText :string;
  constructor(private userList: UserServiceService) {
   }

  ngOnInit(): void {
    console.log(this.anchorName)
    this.buttonClass += this.anchorName != "Manage"?(this.anchorName === "Activate"?"btn-danger":"btn-success"):"btn-primary"
    this.cardClass += this.user.isDeleted == false?"card-green":"card-red";
    // this.cardClass += this.anchorName == "Manage"?" col-6":"";
    this.buttonText = this.anchorName != "Manage"?(this.anchorName == "Activate"?"Deactivate":"Activate"):"Detail";
    console.log(this.buttonText)

    
  }

  invertActivationId(id :any){
    this.invertActivationStatus.emit(id);
  }

}
