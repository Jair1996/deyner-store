import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, of, switchMap } from 'rxjs';
import { Order } from 'src/app/core/models/order.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-list-order-page',
  templateUrl: './list-order-page.component.html',
  styleUrls: ['./list-order-page.component.scss'],
})
export class ListOrderPageComponent {
  orders: Order[] = [];
  loading: boolean = true;

  displayedColumns: string[] = ['id', 'totalPrice', 'orderDate', 'actions'];
  dataSource = new MatTableDataSource<Order>(this.orders);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private orderService: OrderService, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService
      .authState()
      .pipe(
        switchMap((data) => {
          let idUserLoggedIn = '';

          if (data) {
            idUserLoggedIn = data.uid;
          }

          return of(idUserLoggedIn);
        })
      )
      .subscribe((id) => {
        this.orderService
          .getOrdersByUser(id)
          .pipe(catchError((_) => []))
          .subscribe((orders) => {
            this.orders = orders;
            this.dataSource = new MatTableDataSource<Order>(this.orders);
            this.dataSource.paginator = this.paginator;
            this.loading = false;
          });
      });
  }
}
