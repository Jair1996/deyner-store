import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  images = [
    {
      imageSrc: 'assets/images/banner1.jpg',
      imageAlt: 'banner1',
    },
    {
      imageSrc: 'assets/images/banner2.jpg',
      imageAlt: 'banner2',
    },
    {
      imageSrc: 'assets/images/banner3.jpg',
      imageAlt: 'banner3',
    },
  ];
}
