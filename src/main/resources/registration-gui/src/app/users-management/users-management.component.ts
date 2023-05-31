import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user.model';
import { ListDemoService } from '../services/list-demo.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent {
  displayedColumns: string[] = ['position','id','name','email','manage'];
  dataSource:MatTableDataSource<User>;

  constructor(private userList:ListDemoService, private userService:UserDataService){
    this.dataSource=new MatTableDataSource();
    //this.dataSource.data=userList.demoList;//filling table without API
    this.userService.getUserList().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}
