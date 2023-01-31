import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    ListProductPageComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class DashboardModule { }
