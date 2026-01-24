import { Component } from '@angular/core';
import {  RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {

}
