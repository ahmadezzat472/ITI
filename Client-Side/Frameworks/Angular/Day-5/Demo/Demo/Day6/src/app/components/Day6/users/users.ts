import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { userService } from '../../../Services/users';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  providers:[],
  templateUrl: './users.html',
  styles: ``,
})
export class Users implements OnInit {
  constructor(private chgDetect: ChangeDetectorRef, private userService: userService){}
  users: any[] = [];

  ngOnInit(): void {
    // this.userService.allUsers().subscribe(
    //   (data)=>{console.log(data)},
    //   (err)=>{console.log(err)},
    //   ()=>{console.log("Completed")}
    // );
    this.userService.allUsers().subscribe({
      next: (data)=>{
        // console.log(data);
        this.users = data;
        this.chgDetect.detectChanges();
      },
      error: (err)=>{console.log(err)},
      // complete:()=>{console.log("Completed")}
    });
  }


}
