import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.html',
  styles: ``,
})
export class StudentDetails {
  studentID = 0;
  constructor(hamada: ActivatedRoute){
    this.studentID = hamada.snapshot.params["id"]
  }
}
