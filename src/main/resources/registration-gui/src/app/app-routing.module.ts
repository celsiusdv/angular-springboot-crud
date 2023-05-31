import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { UsersManagementComponent } from './users-management/users-management.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'users-management', component:UsersManagementComponent},
  {path: 'update-delete/:index', component:UpdateDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
