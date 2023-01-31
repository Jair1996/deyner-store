import { Component, Input, OnDestroy, OnInit } from '@angular/core';

interface Image {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss'],
})
export class CarouselBannerComponent implements OnInit, OnDestroy {
  @Input() images: Image[] = [];
  @Input() indicators = true;
  @Input() autoSlice = true;
  @Input() sliceInterval = 5000;
  intervalSlice!: any;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlice) {
      this.autoSliceImages();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalSlice) {
      clearInterval(this.intervalSlice);
    }
  }

  autoSliceImages(): void {
    this.intervalSlice = setInterval(() => {
      this.onNext();
    }, this.sliceInterval);
  }

  onNext(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  /**
   * Setea el index de la imagén que está en el arreglo
   * @param index -  índice de la imágen
   */
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
