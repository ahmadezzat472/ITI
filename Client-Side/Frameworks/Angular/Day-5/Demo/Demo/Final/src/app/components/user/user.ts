import { Component, Input } from '@angular/core';
import { user } from '../../../utils/user';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styles: ``,
})
export class User {
  @Input() myUser: user = {} as user;
}
