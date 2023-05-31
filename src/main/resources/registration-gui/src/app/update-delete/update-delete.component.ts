import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { ListDemoService } from '../services/list-demo.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-update-delete',
  templateUrl: './update-delete.component.html',
  styleUrls: ['./update-delete.component.css']
})
export class UpdateDeleteComponent {
  modify!:string;
  colorButton!:string;
  action!:number;
  indexParameter!:number;
  user:User=new User();
  
   constructor(private route: ActivatedRoute, private userService: UserDataService, private goBack: Router) {
      /* value received from users-management.component.html, update or delete button with [routerLink] */
      this.indexParameter = this.route.snapshot.params['index'];
      /* value received from users-management.component.html, update or delete button with [queryParams] */
      this.action = this.route.snapshot.queryParams['manage'];

      this.fillInputs();
      this.switchButton();
   }


   protected manageUser(): void {
      if (this.action == 1) {
         this.userService.updateUser(this.user.userId, this.user).subscribe({
            next: (data) => {
               console.log(data);
               this.goBack.navigate(['/users-management']);
            }
         });

      } else if (this.action == 2) {
         this.userService.deleteUser(this.user.userId).subscribe(() => {
            this.goBack.navigate(['/users-management']);//set new changes if there is any update on the table with Observable
         })
      }
   }

   protected fillInputs() {
      this.userService.getUserList().subscribe(data => {
         this.user = data[this.indexParameter]
         console.log(this.user);
      });
   }

   protected switchButton(): void {//these values are set in the button to switch color depending of the query value
      if (this.action == 1) {
         this.modify = "update";//interpolation in button value
         this.colorButton = "accent"
      } else if (this.action == 2) {
         this.modify = "delete";
         this.colorButton = "warn"
      }
   }
}
