import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Student, student } from '../../../utiles/student';
import { student } from '../../../utiles/student';
// import { NgIf } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-in-one',
  // imports: [FormsModule, CommonModule],
  // imports: [FormsModule, NgForOf],
  imports: [FormsModule, NgIf],
  templateUrl: './all-in-one.html',
  styleUrl: './all-in-one.css',
})
export class AllInOne {
  stdName = "";
  stdAge = "";// ==>false value ==> 0

  // studentArray: student[] = [];

  // AddStudent(){
  //   if(this.stdName.length > 0 && (+this.stdAge>=20 && +this.stdAge<=30)){
  //     let newStudent:student = {name: this.stdName, age: this.stdAge};
  //     this.studentArray.push(newStudent);
  //   }
  // }
}
