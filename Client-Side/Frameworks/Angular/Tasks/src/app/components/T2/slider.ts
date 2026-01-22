import { Component } from '@angular/core';
import { User } from './user/user';
import { Slider } from './slider/slider';

@Component({
  selector: 'app-main-slider',
  imports: [User, Slider],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class MainSlider {}
