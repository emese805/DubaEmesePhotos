import { Component, OnInit, Input } from '@angular/core';
import {Gallery} from '../gallery/gallery.component';

@Component({
  selector: 'app-gallery-node',
  templateUrl: './gallery-node.component.html',
  styleUrls: ['./gallery-node.component.css']
})
export class GalleryNodeComponent implements OnInit {
  private slideIndex;
  @Input() gallery: Gallery;

  constructor() {
    this.slideIndex = 1;
  }

  ngOnInit() {}

  public openModal() {
    document.getElementById(this.gallery.id).style.display = 'block';
  }
  public closeModal() {
    document.getElementById(this.gallery.id).style.display = 'none';
  }

  public plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  public currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n) {
    let i;
    const slides = <HTMLElement[]><any> document.getElementById(this.gallery.id).getElementsByClassName('mySlides');
    const dots = <HTMLElement[]><any> document.getElementById(this.gallery.id).getElementsByClassName('demo');
    if (n > slides.length) {this.slideIndex = 1; }
    if (n < 1) {this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
      dots[i].style.display = 'none';
    }

    dots[this.slideIndex - 1].style.display = '';
    dots[(this.slideIndex !== 1 ? this.slideIndex - 2 : dots.length - 1)].style.display = '';
    dots[(this.slideIndex !== dots.length ? this.slideIndex : 0)].style.display = '';

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

}
