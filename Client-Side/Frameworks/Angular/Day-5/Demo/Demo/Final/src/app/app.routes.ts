import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { UserDetails } from './components/user-details/user-details';
import { Error } from './components/error/error';

export const routes: Routes = [
  // {path: "", component: Users},
  {path: "", redirectTo:"users", pathMatch:"full"},
  {path: "users", component: Users},
  {path: "users/:id", component: UserDetails},
  {path: "**", component: Error},
];
