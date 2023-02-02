import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInCart } from 'src/app/core/models/product.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  productsInCart!: ProductInCart[];
  totalObservable!: Observable<number>;
  totalPriceObservable!: Observable<number>;
  isLoggedIn = false;

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.productsInCart = this.cartService.getAllProducts;
    this.totalPriceObservable = this.cartService.getTotalPriceToPay;

    this.authService.authState().subscribe((resp) => {
      if (resp) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  increment(id: string) {
    this.cartService.increment(id);
  }

  decrement(id: string) {
    this.cartService.decrement(id);
  }

  toOrder() {
    if (this.isLoggedIn) {
      this.router.navigate(['/orden']);
    } else {
      Swal.fire('Ooops!', 'Necesita iniciar sesión para continuar su compra', 'warning');
    }
  }
}
