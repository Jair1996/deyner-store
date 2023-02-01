import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SharedModule as GlobalSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartRoutingModule, GlobalSharedModule],
})
export class CartModule {}
