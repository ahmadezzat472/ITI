import { Routes } from '@angular/router';
import { MainSlider as task1 } from './components/T2/slider';
import { studentRegister as task2 } from './components/T3/student-register';
import { studentRegister as task3 } from './components/T4/student-register';

export const routes: Routes = [
  { path: '', redirectTo: 'task-1', pathMatch: 'full' },
  { path: 'task-1', component: task1 },
  { path: 'task-2', component: task2 },
  { path: 'task-3', component: task3 },
];
