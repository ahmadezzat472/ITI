import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
})
export class Slider {
  constructor(private ngZone: NgZone) {}
  imgs = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/4.jpg'];
  isPlaying = false;
  intervalId?: number;
  currentIndex = 0;

  startSlideshow() {
    this.stopSlideshow();
    this.isPlaying = true;
    this.intervalId = window.setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
      console.log(this.imgs[this.currentIndex]);
    }, 1000);
  }

  stopSlideshow() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  togglePlay() {
    this.isPlaying ? this.stopSlideshow() : this.startSlideshow();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.imgs.length) % this.imgs.length;
  }
}

// constructor(private checkChange: ChangeDetectorRef){}

// this.checkChange.detectChanges();
