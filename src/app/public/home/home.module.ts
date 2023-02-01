import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselBannerComponent } from './components/carousel-banner/carousel-banner.component';
import { BestProductsComponent } from './components/best-products/best-products.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { CarouselPopularComponent } from './components/carousel-popular/carousel-popular.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { SharedModule } from '../shared/shared.module';
import { SharedModule as GlobalSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CarouselBannerComponent,
    BestProductsComponent,
    PopularProductsComponent,
    CarouselPopularComponent,
    CustomerReviewsComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, NgOptimizedImage, GlobalSharedModule, SharedModule],
})
export class HomeModule {}
