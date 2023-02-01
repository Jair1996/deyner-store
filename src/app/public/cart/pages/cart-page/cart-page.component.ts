import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInCart } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  productsInCart!: ProductInCart[];
  totalObservable!: Observable<number>;
  totalPriceObservable!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.productsInCart = this.cartService.getAllProducts;
    this.totalPriceObservable = this.cartService.getTotalPriceToPay;
  }

  increment(id: string) {
    this.cartService.increment(id);
  }

  decrement(id: string) {
    this.cartService.decrement(id);
  }
}
