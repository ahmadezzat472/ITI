import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(0, [{validators: Validators.max(30), message: 'Age must be at most 30'}, Validators.min(20), Validators.required]),
  });

  @Output() submitStudent = new EventEmitter<{ name: string; age: number }>();

  submit() {
    if (this.registerForm.valid) {
      this.submitStudent.emit(this.registerForm.value as { name: string; age: number });
      this.registerForm.reset();
    }
  }
}
