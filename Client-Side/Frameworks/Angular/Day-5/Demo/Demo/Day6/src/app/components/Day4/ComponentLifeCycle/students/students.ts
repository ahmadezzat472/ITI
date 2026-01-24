import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { student } from '../../../../utiles/student';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnChanges {
  // @Input() allStudents: student[] = [];
  allStudents: (student|null)[] = [];
  @Input() newStudent: student|null = null;
  @Input() userName = "";
  // push ???
  // hamada(){
  //   this.allStudents.push(this.newStudent);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges");
    // console.log(this.newStudent);
    // if(this.newStudent){
    console.log(changes);
    if(changes["newStudent"].firstChange === false){
      // console.log("ngOnChanges");
      // console.log(this.newStudent);
      this.allStudents.push(this.newStudent);
    }
  }
}
