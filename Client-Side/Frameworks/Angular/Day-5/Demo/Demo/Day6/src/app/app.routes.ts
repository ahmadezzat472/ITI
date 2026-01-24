import { Routes } from '@angular/router';
import { Users } from './components/Day6/users/users';
import { UserDetails } from './components/Day6/user-details/user-details';
import { Error } from './components/Day6/error/error';
// import { Students } from './components/Day5/students/students';
// import { StudentDetails } from './components/Day5/student-details/student-details';
// import { About } from './components/Day5/about/about';
// import { Profile } from './components/Day5/profile/profile';
// import { Error } from './components/Day5/error/error';

// export const routes: Routes = [
//   {path: '', component: Students},
//   {path: 'students', component: Students},
//   {path: 'students/:id', component: StudentDetails},
//   {path: 'about', component: About},
//   {path: 'profile', component: Profile},
//   {path: '**', component: Error},
// ];

export const routes: Routes = [
  {path: '', component: Users},
  {path: 'users', component: Users},
  {path: 'users/:id', component: UserDetails},
  {path: '**', component: Error},
];
