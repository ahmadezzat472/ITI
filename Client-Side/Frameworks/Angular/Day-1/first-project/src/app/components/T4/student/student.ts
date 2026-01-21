import { Component, Input } from '@angular/core';
import { Student } from '../types/student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Students {
  @Input() students: Student[] = [];
}
