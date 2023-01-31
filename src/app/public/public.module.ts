import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CoreModule as PublicCoreModule } from './core/core.module';

import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

@NgModule({
  declarations: [
    PublicLayoutComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicCoreModule
  ]
})
export class PublicModule { }
