import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  imports: [ReactiveFormsModule],
  templateUrl: './validators.html',
  styles: ``,
})
export class Validatorss {
  // name = "";

  // add(name: string, age: number){
  //   console.log( {name, age} )
  // }

  myForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    userAge: new FormControl(null, [Validators.max(30), Validators.min(20)])
  })

  get NameValid(){//NameValid = true || false
    return this.myForm.controls.userName.valid;
  }

  Add(){
    console.log(this.myForm);
    console.log("Name", this.myForm.controls.userName.valid);
    console.log("Age", this.myForm.controls.userAge.valid);
    // if(this.myForm.status === "VALID"){
    if(this.myForm.valid){
      //push
      console.log("Data==> ", this.myForm.value);//{userName, userAge}
    }else{
      alert("Wrong Data");
    }
  }

}
