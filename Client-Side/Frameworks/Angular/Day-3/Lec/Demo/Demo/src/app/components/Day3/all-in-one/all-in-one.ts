import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Student, student } from '../../../utiles/student';
import { student } from '../../../utiles/student';
// import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-all-in-one',
  // imports: [FormsModule, CommonModule],
  // imports: [FormsModule, NgForOf],
  imports: [FormsModule],
  templateUrl: './all-in-one.html',
  styleUrl: './all-in-one.css',
})
export class AllInOne {
  stdName = "";
  stdAge = "";

  studentArray: student[] = [];

  AddStudent(){
    let newStudent:student = {name: this.stdName, age: this.stdAge};
    this.studentArray.push(newStudent);
  }
}
