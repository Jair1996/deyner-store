import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableProductsComponent } from './components/table-products/table-products.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomePageComponent,
    ListProductPageComponent,
    CreateProductPageComponent,
    CreateProductFormComponent,
    TableProductsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
