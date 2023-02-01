import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInCart } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart: ProductInCart[];
  private totalProductsInCart = new BehaviorSubject<number>(0);

  get getTotalProductsInCart(): Observable<number> {
    return this.totalProductsInCart as Observable<number>;
  }

  get getAllProducts() {
    return [...this.productsInCart];
  }

  constructor() {
    this.productsInCart = JSON.parse(localStorage.getItem('products') || '[]') || [];

    this.totalProductsInCart.next(this.totatalProducts());
  }

  addProduct(product: ProductInCart) {
    const productFound = this.productsInCart.find((p) => p.id === product.id);

    if (productFound) {
      productFound.quantity += product.quantity;
    } else {
      this.productsInCart.push(product);
    }

    this.syncLocalStorage();
    this.totalProductsInCart.next(this.totatalProducts());
  }

  syncLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.productsInCart));
  }

  private totatalProducts(): number {
    return this.productsInCart.reduce((current, product) => current + product.quantity, 0);
  }
}
