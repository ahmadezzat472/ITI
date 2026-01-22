import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-first',
  templateUrl: "./first.html",
  styleUrl: "./first.css",
  imports: [FormsModule]
})
export class First{
  userName = "Ahmed";
  userAge = 10;
  address = "123 st.";
  myClass = "mine";
  imgSrc = "/images/1.jpg";
  fName = "";
  lName = "";
  age = 0;

  chgName(){
    this.userName = "Ali";
    this.myClass = "mine2";
  }

  chgPic1(){
    this.imgSrc = "/images/2.jpg";
  }
  chgPic2(){
    this.imgSrc = "/images/1.jpg";
  }

  getData(evt:Event){
    // console.log(evt.target?.value);
    let fNameInput = evt.target as HTMLInputElement;
    this.fName = fNameInput?.value;
  }
}


//sdnull
