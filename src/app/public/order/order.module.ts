import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { OrderDetailPageComponent } from './pages/order-detail-page/order-detail-page.component';


@NgModule({
  declarations: [
    OrderPageComponent,
    ListOrderPageComponent,
    OrderDetailPageComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class OrderModule { }
