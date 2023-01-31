import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselBannerComponent } from './components/carousel-banner/carousel-banner.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CarouselBannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
  ]
})
export class HomeModule { }
