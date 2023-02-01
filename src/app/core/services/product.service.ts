import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
  addDoc,
  query,
  where,
  getDoc,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'products');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  getProduct(id: string) {
    const productRef = doc(this.firestore, `products/${id}`);
    return getDoc(productRef);
  }

  getBestProducts(): Observable<Product[]> {
    const playersRef = collection(this.firestore, 'products');
    let q = query(playersRef);

    q = query(playersRef, where('best', '==', true));

    return collectionData(q, { idField: 'id' }) as unknown as Observable<Product[]>;
  }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  deleteProduct(product: Product) {
    const productRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productRef);
  }
}
