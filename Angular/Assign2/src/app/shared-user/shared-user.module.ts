import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserListComponent
  ]
})
export class SharedUserModule { }
