import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOperationComponent } from './create-operation/create-operation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOperationComponent } from './update-operation/update-operation.component';



@NgModule({
  declarations: [CreateOperationComponent, UpdateOperationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormOperationModule { }
