import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { SharedUserModule } from '../shared-user/shared-user.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../shared-user/user-details/user-details.component';
import { FormOperationModule } from '../form-operation/form-operation.module';
import { CreateOperationComponent } from '../form-operation/create-operation/create-operation.component';
import { UpdateOperationComponent } from '../form-operation/update-operation/update-operation.component';

const manageRoutes = [
  {
    path:"",component:ManageUserComponent,
    children:[
      {path:"form/create",component:CreateOperationComponent},
      {path:"form/update/:id",component:UpdateOperationComponent},
      {path:":id",component:UserDetailsComponent}
    ]
  }
]

@NgModule({
  declarations: [ManageUserComponent],
  imports: [
    CommonModule,
    SharedUserModule,
    FormOperationModule,
    RouterModule.forChild(manageRoutes)
  ]
})
export class ManageModule { }
