import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'catalogo',
        loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
        ...canActivate(() => redirectLoggedInTo(['/'])),
      },
      {
        path: 'producto',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'carrito',
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'orden',
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),
        ...canActivate(() => redirectUnauthorizedTo(['/carrito'])),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
