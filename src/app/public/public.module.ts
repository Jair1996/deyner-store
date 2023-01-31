import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CoreModule as PublicCoreModule } from './core/core.module';

import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';


@NgModule({
  declarations: [
    PublicLayoutComponent,
    HomePageComponent,
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PublicCoreModule
  ]
})
export class PublicModule { }
