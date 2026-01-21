import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './components/first/first';
import { AllInOne } from './components/Day3/all-in-one/all-in-one';
import { Home } from './components/Day3/ComponentInteraction/home/home';
import { Login } from './components/Day3/ComponentInteraction/login/login';

//Decorator [MetaData] [Information]
@Component({
  selector: 'hamada',
  imports: [First, AllInOne, Home, Login], // Any (Modules|Component|Pipes|Directives) needs at this component Only --> [FormsModule-ReactieFormsModule-Login-Register]
  providers: [], //Any (Service api) needs at this component Only
  templateUrl: './app.html', //HTML Template
  styleUrl: './app.css', //Style
})
export class App {
  ///Logic
  // name = "Ahmed";
  // age = 10;
  DataParent = '2na Data Mn El Parent';
  DataFromLogin = '';

  getDataFromLogin(soso: any) {
    // console.log(soso);
    this.DataFromLogin = soso;
  }
}
