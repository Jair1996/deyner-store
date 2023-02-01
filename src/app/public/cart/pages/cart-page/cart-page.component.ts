import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  productsInCart!: ProductInCart[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getAllProducts;
  }
}
