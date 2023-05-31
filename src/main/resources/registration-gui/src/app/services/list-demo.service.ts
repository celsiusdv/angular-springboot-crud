import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ListDemoService {
  demoList:User[];
  constructor() {

    this.demoList=[
      {userId:456,userName:"tanya",email:"mail@mail.com",password:"asdf"},
      {userId:354,userName:"alexa",email:"mail@mail.com",password:"asdf"},
      {userId:866,userName:"roxy",email:"mail@mail.com",password:"asdf"},
      {userId:235,userName:"daniella",email:"mail@mail.com",password:"asdf"}
    ];
   }

   public updateuser(userName:string,email:string,password:string,index:number):void{
    this.demoList[index].userName=userName;
    this.demoList[index].email=email;
    this.demoList[index].password=password;
   }
}
