import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow-home',
  templateUrl: './slideshow-home.component.html',
  styleUrls: ['./slideshow-home.component.css']

})
export class SlideshowHomeComponent implements OnInit {
  private slideIndex;
  // Next/previous controls
  public plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  public currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n) {
    let i;
    const slides = <HTMLElement[]><any> document.getElementsByClassName('mySlides');
    const dots = <HTMLElement[]><any> document.getElementsByClassName('dot');
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }
  constructor() {
    this.slideIndex = 1;
  }

  ngOnInit() {
    this.showSlides( this.slideIndex );
  }

}

