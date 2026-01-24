import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from '../../../Services/users';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styles: ``,
})
export class UserDetails {
  userID = 0;
  user: any;//undefined
  constructor(private chgDetect: ChangeDetectorRef, myActivatedRoute: ActivatedRoute, private userService: userService){
    this.userID = myActivatedRoute.snapshot.params["id"];
  }
  ngOnInit(){
    this.userService.userByID(this.userID).subscribe({
      next: (data)=>{
        // console.log(data);
        this.user = data;
        this.chgDetect.detectChanges();
      }
    });
  }
}
