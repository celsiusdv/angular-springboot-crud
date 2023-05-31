import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model';
import { ListDemoService } from '../services/list-demo.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registerForm:FormGroup;
  exportUserList:MatTableDataSource<User>;//variable to set in child table component in user-list-component.html
  
  constructor(private userService:UserDataService, private listDemo:ListDemoService){
    this.registerForm=new FormGroup({
                      userName:new FormControl(null,[Validators.required,Validators.minLength(3)]),
                      email:new FormControl(null,[Validators.required,Validators.minLength(9),Validators.email]),
                      password:new FormControl(null,[Validators.required,Validators.minLength(9)])
    });
    this.exportUserList=new MatTableDataSource();
    //this.exportUserList.data=this.listDemo.demoList;/////load table without API
    this.loadUsersTable();

  }

  public submitForm(){
/*     this.listDemo.demoList.push(this.registerForm.value);// using demo repository
    this.exportUserList.data=this.listDemo.demoList; */
    this.userService.createUser(this.registerForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.loadUsersTable();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  public loadUsersTable():void{
    this.userService.getUserList().subscribe(data => {this.exportUserList.data = data;});
  }
  public get registerControls(){//controls name from inputs to use in validations in home.component.html
    return this.registerForm.controls;
  }
}
