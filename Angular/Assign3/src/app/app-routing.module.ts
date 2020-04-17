import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowActiveUserComponent } from './active/show-active-user/show-active-user.component';
import { ShowDeletedUserComponent } from './deleted/show-deleted-user/show-deleted-user.component';


const routes: Routes = [
  {path:'active',component:ShowActiveUserComponent},
  {path:'deleted',component:ShowDeletedUserComponent},
  {
    path:'manage',loadChildren:() => import('./manage/manage.module').then((file) => file.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
