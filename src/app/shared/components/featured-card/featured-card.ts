import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { ImgProductsTypes, ImgProducts } from '../img-products/img-products';
import { Button } from "../button/button";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-featured-card',
  imports: [Button, ImgProducts, NgClass],
  templateUrl: './featured-card.html'
})
export class FeaturedCard implements OnInit, OnDestroy {
  @Input() featureImage!: ImgProductsTypes;
  @Input() featureName!: string;
  @Input() featureDescription!: string;
  
  ImgProductsTypes = ImgProductsTypes;

  colors = [
    'bg-gradient-to-br from-green-300 to-white',
    'bg-gradient-to-br from-pink-900 to-gray-800 text-white',
    'bg-gradient-to-br from-gray-300 to-gray-100',
    'bg-gradient-to-br from-yellow-300 to-gray-100'
  ];
  currentColor = signal(this.colors[0]);

  intervalId!: ReturnType<typeof setInterval>; 
  lastIndex = 0;

  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAnimation() {
    this.intervalId = setInterval(() => {
      let newIndex;

      do {
        newIndex = Math.floor(Math.random() * this.colors.length);
      } while (newIndex === this.lastIndex); // ❌ tránh trùng

      this.lastIndex = newIndex;
      this.currentColor.set(this.colors[newIndex]);

    }, 3000); // ⏱️ đổi mỗi 3s
  }
}
