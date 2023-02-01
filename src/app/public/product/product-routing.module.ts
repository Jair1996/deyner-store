import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrductPageComponent } from './pages/prduct-page/prduct-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':idProducto',
        component: PrductPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
