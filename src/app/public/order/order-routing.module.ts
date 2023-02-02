import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { OrderDetailPageComponent } from './pages/order-detail-page/order-detail-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: OrderPageComponent,
      },
      {
        path: 'lista',
        component: ListOrderPageComponent,
      },
      {
        path: 'detalle/:idOrder',
        component: OrderDetailPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
