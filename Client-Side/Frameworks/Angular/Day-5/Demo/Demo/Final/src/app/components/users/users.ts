import { Component, signal } from '@angular/core';
import { UsersService } from '../../services/users-service';
import { user } from '../../../utils/user';
import { User } from "../user/user";

@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styles: ``,
})
export class Users {
  constructor(private userService: UsersService){}
  users = signal([] as user[]);
  ngOnInit(){
    this.userService.allUsers().subscribe({
      next: (data)=>{
        this.users.set(data);
      },
      error: (err)=>{console.log(err)}
    });
  }
}
