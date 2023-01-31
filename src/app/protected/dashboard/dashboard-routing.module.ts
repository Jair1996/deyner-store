import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListProductPageComponent } from './pages/list-product-page/list-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'producto/lista',
        component: ListProductPageComponent,
      },
      {
        path: 'producto/crear',
        component: CreateProductPageComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
