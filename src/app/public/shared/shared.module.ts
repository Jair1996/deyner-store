import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CardProductComponent } from './components/card-product/card-product.component';

@NgModule({
  declarations: [CardProductComponent],
  exports: [CardProductComponent],
  imports: [CommonModule, SharedRoutingModule, NgOptimizedImage],
})
export class SharedModule {}
