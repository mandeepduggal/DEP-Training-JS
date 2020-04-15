import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDeletedUserComponent } from './show-deleted-user/show-deleted-user.component';
import { SharedUserModule } from '../shared-user/shared-user.module';



@NgModule({
  declarations: [ShowDeletedUserComponent],
  imports: [
    CommonModule,
    SharedUserModule
  ]
})
export class DeletedModule { }
