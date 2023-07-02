import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFiller = false;
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  sidenavOpened = false;
  slides = [
    {
      heading: 'Slide 1 Heading',
      body: 'Slide 1 Body Text',
      image: 'path/to/slide1-image.jpg',
      link: 'https://example.com'
    },
    {
      heading: 'Slide 2 Heading',
      body: 'Slide 2 Body Text',
      image: 'path/to/slide2-image.jpg',
      link: 'https://example.com'
    },
    {
      heading: 'Slide 3 Heading',
      body: 'Slide 3 Body Text',
      image: 'path/to/slide3-image.jpg',
      link: 'https://example.com'
    }
  ];
  slideIndex = 0;
  
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
  
  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}