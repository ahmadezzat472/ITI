import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //1) Data
  DataLogin = "2na Data Mn El Login";
  //2) Create Event
  @Output() kokoEvent = new EventEmitter();
  //3) Fire Event??? --> Pass Data
  fireEventNow(){
    this.kokoEvent.emit(this.DataLogin);
  }

}
