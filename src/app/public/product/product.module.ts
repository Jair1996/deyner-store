import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PrductPageComponent } from './pages/prduct-page/prduct-page.component';

@NgModule({
  declarations: [PrductPageComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
