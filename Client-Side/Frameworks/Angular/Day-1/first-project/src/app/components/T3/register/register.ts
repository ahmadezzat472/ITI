import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = '';
  age: number | null = null;

  @Output() submitStudent = new EventEmitter();

  register() {
    if (this.name && this.age !== null && this.age > 0) {
      this.submitStudent.emit({ name: this.name, age: this.age });
      // alert(`Registered Successfully!\nName: ${this.name}\nAge: ${this.age}`);
      this.name = '';
      this.age = null;
    } else {
      alert('Please enter valid name and age.');
    }
  }
}
