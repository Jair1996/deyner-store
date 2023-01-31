import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

interface Image {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel-popular',
  templateUrl: './carousel-popular.component.html',
  styleUrls: ['./carousel-popular.component.scss'],
})
export class CarouselPopularComponent {
  @ViewChild('carouselDiv') carouselContainer!: ElementRef<HTMLDivElement>;
  @Input() images: Image[] = [];
  selectedIndex = 1;

  // 0 1 2
  moveToSelected(index: number) {
    this.selectedIndex = index;
    const carousel = this.carouselContainer.nativeElement;

    const selected = carousel.querySelector(`.image__${index}`) as HTMLElement;

    let next: HTMLElement;
    let previus: HTMLElement;

    if (index === 2) {
      next = carousel.querySelector('.image__0') as HTMLElement;
      previus = carousel.querySelector(`.image__${index - 1}`) as HTMLElement;
    } else if (index == 0) {
      next = carousel.querySelector(`.image__${index + 1}`) as HTMLElement;
      previus = carousel.querySelector('.image__2') as HTMLElement;
    } else {
      next = carousel.querySelector(`.image__${index + 1}`) as HTMLElement;
      previus = carousel.querySelector(`.image__${index - 1}`) as HTMLElement;
    }

    selected.classList.remove('prev', 'next');
    selected.classList.add('selected');

    previus.classList.remove('selected', 'next');
    previus.classList.add('prev');

    next.classList.remove('selected', 'prev');
    next.classList.add('next');
  }
}
