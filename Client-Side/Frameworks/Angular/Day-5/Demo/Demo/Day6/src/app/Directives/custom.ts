import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class Custom {

  // @Input("appCustom") textAlign = "";
  @Input("appCustom") dataObj = {tAl:"", fgC: "", bgC:""};//default ==> textAlign=left & fgC = black & bgC = white

  constructor(private myElement: ElementRef) {
    myElement.nativeElement.style.color = "red";
    myElement.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('click') click(){
    this.myElement.nativeElement.style.textAlign = this.dataObj.tAl;
    this.myElement.nativeElement.style.color = this.dataObj.fgC;
    this.myElement.nativeElement.style.backgroundColor = this.dataObj.bgC;
  }

  // @HostListener('mouseover') mouseover(){
  //   this.myElement.nativeElement.style.boxShadow = "10px 10px 10px black"
  // }

  // @HostListener('mouseout') mouseout(){
  //   this.myElement.nativeElement.style.boxShadow = "none"
  // }

}
