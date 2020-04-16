import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowActiveUserComponent } from './show-active-user/show-active-user.component';
import { SharedUserModule } from '../shared-user/shared-user.module';



@NgModule({
  declarations: [ShowActiveUserComponent],
  imports: [
    CommonModule,
    SharedUserModule
  ]
})
export class ActiveModule { }
