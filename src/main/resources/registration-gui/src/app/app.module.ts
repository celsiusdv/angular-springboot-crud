import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersManagementComponent } from './users-management/users-management.component'; 
import { UserListComponent } from './user-list/user-list.component';
import { ListDemoService } from './services/list-demo.service';
import { UpdateDeleteComponent } from './update-delete/update-delete.component'; 
import { UserDataService } from './services/user-data.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table';

const material= [
  NoopAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersManagementComponent,
    UserListComponent,
    UpdateDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    material
    
  ],
  providers: [ListDemoService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
