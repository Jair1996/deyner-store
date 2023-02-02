import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductInCart } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart: ProductInCart[];
  private totalProductsInCart = new BehaviorSubject<number>(0);
  private totalPrice = new BehaviorSubject<number>(0);

  constructor() {
    this.productsInCart = JSON.parse(localStorage.getItem('products') || '[]') || [];

    this.totalProductsInCart.next(this.totatalProducts());
    this.totalPrice.next(this.totalPriceToPay());
  }

  get getTotalPriceToPay(): Observable<number> {
    return this.totalPrice as Observable<number>;
  }

  get getTotalProductsInCart(): Observable<number> {
    return this.totalProductsInCart as Observable<number>;
  }

  get getAllProducts() {
    return [...this.productsInCart];
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
    this.totalPrice.next(this.totalPriceToPay());
  }

  syncLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.productsInCart));
  }

  private totatalProducts(): number {
    return this.productsInCart.reduce((current, product) => current + product.quantity, 0);
  }

  private totalPriceToPay(): number {
    return this.productsInCart.reduce((current, product) => {
      const priceToPay = product.ofert || product.price;

      const totalPrice = priceToPay * product.quantity;

      return current + totalPrice;
    }, 0);
  }

  increment(id: string) {
    const productFound = this.productsInCart.find((p) => p.id === id);

    if (productFound) {
      productFound.quantity++;
      this.totalProductsInCart.next(this.totatalProducts());
      this.totalPrice.next(this.totalPriceToPay());
      this.syncLocalStorage();
    }
  }

  decrement(id: string) {
    const productFound = this.productsInCart.find((p) => p.id === id);

    if (productFound) {
      productFound.quantity--;
      this.totalProductsInCart.next(this.totatalProducts());
      this.totalPrice.next(this.totalPriceToPay());
      this.syncLocalStorage();
    }
  }

  clear() {
    this.productsInCart = [];
    this.totalProductsInCart.next(this.totatalProducts());
    this.totalPrice.next(this.totalPriceToPay());
    this.syncLocalStorage();
  }
}
