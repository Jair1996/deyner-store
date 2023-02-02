import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order.model';
import { ProductInCart, ProductInOrder } from 'src/app/core/models/product.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderService } from 'src/app/core/services/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  loading: boolean = false;

  productsInCart!: ProductInCart[];
  totalObservable!: Observable<number>;
  totalPriceObservable!: Observable<number>;

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.productsInCart = this.cartService.getAllProducts;
    this.totalPriceObservable = this.cartService.getTotalPriceToPay;
  }

  pay() {
    if (this.productsInCart.length === 0) {
      Swal.fire('Ooops!', 'Necestita tener algunos productos para realizar una compra', 'warning');
      return;
    }

    this.loading = true;

    const productToOrder: ProductInOrder[] = this.productsInCart.map((product) => ({
      id: product.id,
      brand: product.brand,
      image: product.images[0],
      name: product.name,
      ofert: product.ofert,
      price: product.price,
      quantity: product.quantity,
      sku: product.sku,
    }));

    const order: Order = {
      userId: this.authService.userLoggedIn?.id!,
      totalPrice: this.cartService.totalPriceToPay(),
      orderDate: Date.now(),
      products: productToOrder,
    };

    this.orderService
      .addOrder(order)
      .then((_) => {
        this.cartService.clear();
        this.router.navigate(['/orden/lista']);
        Swal.fire('Buen trabajo!', 'Su compra se realizo correctamente', 'success');
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Ooops!', 'Ha ocurrido un error al realizar su compra', 'error');
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
