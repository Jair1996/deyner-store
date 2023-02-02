import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductInCart } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {
  productsInCart!: ProductInCart[];
  totalObservable!: Observable<number>;
  totalPriceObservable!: Observable<number>;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.productsInCart = this.cartService.getAllProducts;
    this.totalPriceObservable = this.cartService.getTotalPriceToPay;
  }

  pay() {
    this.cartService.clear();
    this.router.navigate(['/']);
    Swal.fire('Buen trabajo!', 'Su compra se realizo correctamente', 'success');
  }
}
