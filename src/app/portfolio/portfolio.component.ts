import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  show:string = "";
  images = [
    { src: '/images/poert1.png', alt: 'Image 1' },
    { src: '/images/port2.png', alt: 'Image 2' },
    { src: '/images/port3.png', alt: 'Image 3' },
    { src: '/images/poert1.png', alt: 'Image 4' },
    { src: '/images/port2.png', alt: 'Image 5' },
    { src: '/images/port3.png', alt: 'Image 6' },
  ];

  showImge(images:string):void {
    this.show= images
  }
}
