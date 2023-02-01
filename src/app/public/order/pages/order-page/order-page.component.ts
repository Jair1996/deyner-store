import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInCart } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {
  productsInCart!: ProductInCart[];
  totalObservable!: Observable<number>;
  totalPriceObservable!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.productsInCart = this.cartService.getAllProducts;
    this.totalPriceObservable = this.cartService.getTotalPriceToPay;
  }
}
