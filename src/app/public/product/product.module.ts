import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PrductPageComponent } from './pages/prduct-page/prduct-page.component';
import { SharedModule as GlobalSharedModule } from 'src/app/shared/shared.module';
import { NgOptimizedImage } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [PrductPageComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    GlobalSharedModule,
    NgOptimizedImage,
    MaterialModule,
  ],
})
export class ProductModule {}
