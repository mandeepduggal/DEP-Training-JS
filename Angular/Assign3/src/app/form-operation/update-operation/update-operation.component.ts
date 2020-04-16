import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-operation',
  templateUrl: './update-operation.component.html',
  styleUrls: ['./update-operation.component.css']
})
export class UpdateOperationComponent implements OnInit {

  public user;
  public updateForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl('',Validators.pattern("[0-9]+")),
  });
  constructor(private userService: UserServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.getUSerDetails(id);
      this.route.params.subscribe((params) => {
      
        this.getUSerDetails(params["id"])
          
      });
  }

  getUSerDetails(id: string){
    this.userService.getUserDetail(id).subscribe(
      (result)=>{
        this.updateForm.setValue({
          id: result["id"], 
          password: result["password"],
          age: result["age"]
        });
      },
      (error) => {console.log("Error -",error)},
      () =>{console.log("Completed getUserDetail")});
      
  }
  
  updateUser() {
    console.log(this.updateForm.value);
    this.userService.updateDetail(this.updateForm.value).subscribe(
      (result)=>{console.log("Result: "+result);},
      (error) => {console.log("Error -",error)},
      () => {console.log("complete");this.getUSerDetails(this.updateForm.value["id"])});
  }

}
