import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}