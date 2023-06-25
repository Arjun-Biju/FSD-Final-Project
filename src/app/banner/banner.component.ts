import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  currentSliderIndex: number = 0;
  sliders: string[] = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg'];

  ngOnInit() {
    this.showSlider(this.currentSliderIndex);
  }

  showSlider(index: number) {
    const sliders = document.getElementsByClassName('slider');
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('active');
    }
    sliders[index].classList.add('active');
  }

  nextSlider() {
    this.currentSliderIndex++;
    if (this.currentSliderIndex >= this.sliders.length) {
      this.currentSliderIndex = 0;
    }
    this.showSlider(this.currentSliderIndex);
  }

  prevSlider() {
    this.currentSliderIndex--;
    if (this.currentSliderIndex < 0) {
      this.currentSliderIndex = this.sliders.length - 1;
    }
    this.showSlider(this.currentSliderIndex);
  }
}
