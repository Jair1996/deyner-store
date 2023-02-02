import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/models/order.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-detail-page',
  templateUrl: './order-detail-page.component.html',
  styleUrls: ['./order-detail-page.component.scss'],
})
export class OrderDetailPageComponent implements OnInit {
  loading: boolean = true;
  order!: Order;
  totalProducts = 0;

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idOrder')!;
    this.orderService.getOrderById(id).then((order) => {
      this.order = order.data() as Order;

      this.totalProducts = this.order.products.reduce(
        (current, product) => current + product.quantity,
        0
      );

      this.loading = false;
    });
  }
}
