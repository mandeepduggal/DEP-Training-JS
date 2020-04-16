import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SharedUserModule } from '../shared-user/shared-user.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../shared-user/user-details/user-details.component';

const manageRoutes = [
  {
    path:"",component:ManageUserComponent,
    children:[
      {
        path:":id",component:UserDetailsComponent

      }
    ]
  }
]

@NgModule({
  declarations: [ManageUserComponent],
  imports: [
    CommonModule,
    SharedUserModule,
    RouterModule.forChild(manageRoutes)
  ]
})
export class ManageModule { }
