import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popular-products',
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.scss'],
})
export class PopularProductsComponent {
  imagesPopular = [
    {
      imageSrc: 'assets/images/popular1.jpg',
      imageAlt: 'popular1',
    },
    {
      imageSrc: 'assets/images/popular2.jpg',
      imageAlt: 'popular2',
    },
    {
      imageSrc: 'assets/images/popular3.jpg',
      imageAlt: 'popular3',
    },
  ];
}
