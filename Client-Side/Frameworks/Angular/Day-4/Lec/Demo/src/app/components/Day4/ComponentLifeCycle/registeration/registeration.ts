import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  imports: [FormsModule],
  templateUrl: './registeration.html',
  styleUrl: './registeration.css',
})
export class Registeration {
  name = "";
  age:number|null = null;
  @Output() sendStudent = new EventEmitter();
  addStudent(){
    let newStudent = {name: this.name, age: this.age};
    this.sendStudent.emit(newStudent);
  }
}
