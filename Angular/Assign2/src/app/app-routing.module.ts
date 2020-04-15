import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowActiveUserComponent } from './active/show-active-user/show-active-user.component';
import { ShowDeletedUserComponent } from './deleted/show-deleted-user/show-deleted-user.component';


const routes: Routes = [
  // {path:'',component:AppComponent},
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
