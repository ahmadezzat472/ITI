import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  //#region Binding
  // count = 0;
  // plus(){
  //   ++this.count;
  // }
  // minus(){
  //   --this.count;
  // }
  // resetCount(){
  //   this.count = 0;
  // }
  //#endregion

  //#region Signals
    // count = signal(0);
    // plus(){
    //   this.count.update( (num)=>num+1 );
    // }
    // minus(){
    //   this.count.update( (num)=>num-1 );
    // }
    // resetCount(){
    //   this.count.set( 0 );
    // }
  //#endregion
}
