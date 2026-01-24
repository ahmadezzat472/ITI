import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users-service';
import { user } from '../../../utils/user';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styles: ``,
})
export class UserDetails {
  userId = 0;
  user = signal({} as user);
  constructor(myRoute: ActivatedRoute, private userService: UsersService){
    this.userId = myRoute.snapshot.params["id"];
  }
  ngOnInit(){
    this.userService.userByID(this.userId).subscribe({
      next: (data)=>{
        this.user.set(data);
      },
      error: (err)=>{console.log(err)}
    });
  }


  dltUser(){
    this.userService.deleteUser(this.userId).subscribe({
      complete: ()=>{}
    });
  }

}
