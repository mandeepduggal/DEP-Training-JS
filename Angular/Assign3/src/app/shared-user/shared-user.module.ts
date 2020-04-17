import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FullNamePipe } from '../full-name.pipe';
import { StatusPipe } from '../status.pipe';



@NgModule({
  declarations: [
    UserComponent, 
    UserListComponent, 
    UserDetailsComponent,
    FullNamePipe,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserListComponent
  ]
})
export class SharedUserModule { }
