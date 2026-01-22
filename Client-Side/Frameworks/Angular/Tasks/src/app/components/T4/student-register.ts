import { Component } from '@angular/core';
import { Register } from './register/register';
import { Students } from './student/student';
import { Student } from './types/student';

@Component({
  selector: 'studentRegister',
  imports: [Register, Students],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css',
})
export class studentRegister {
  students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }
}
