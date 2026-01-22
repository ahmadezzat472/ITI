import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Third } from "./components/third/third";
import { AllInOne } from "./components/Day3/all-in-one/all-in-one";
import { Home } from "./components/Day3/ComponentInteraction/home/home";
import { Login } from "./components/Day3/ComponentInteraction/login/login";
import { Registeration } from "./components/Day4/ComponentLifeCycle/registeration/registeration";
import { Students } from "./components/Day4/ComponentLifeCycle/students/students";
import { student } from './utiles/student';
import { Validatorss } from "./components/Day4/validators/validators";

//Decorator [MetaData] [Information]
@Component({
  selector: 'hamada',
  // imports: [First, Second, Third, AllInOne],// Any (Modules|Component|Pipes|Directives) needs at this component Only --> [FormsModule-ReactieFormsModule-Login-Register]
  imports: [AllInOne, Home, Login, Registeration, Students, Validatorss],// Any (Modules|Component|Pipes|Directives) needs at this component Only --> [FormsModule-ReactieFormsModule-Login-Register]
  providers: [], //Any (Service api) needs at this component Only
  templateUrl: './app.html', //HTML Template
  styleUrl: './app.css' //Style
})
export class App { ///Logic
  // name = "Ahmed";
  // age = 10;
  // DataParent = "2na Data Mn El Parent";
  // DataFromLogin = "";

  // getDataFromLogin(soso: any){
  //   // console.log(soso);
  //   this.DataFromLogin = soso;
  // }

  // students: student[] = [];
  student:student|null = null;

  reciveStudent(data: student){
    // this.students.push(data);
    this.student = data;
  }
}

