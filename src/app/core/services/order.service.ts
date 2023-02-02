import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  Firestore,
  where,
  query,
  collection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private firestore: Firestore) {}

  getOrders(): Observable<Order[]> {
    const orderRef = collection(this.firestore, 'orders');
    return collectionData(orderRef, { idField: 'id' }) as Observable<Order[]>;
  }

  getOrdersByUser(idUser: string) {
    const orderRef = collection(this.firestore, 'orders');
    let q = query(orderRef);

    q = query(orderRef, where('userId', '==', idUser));

    return collectionData(q, { idField: 'id' }) as unknown as Observable<Order[]>;
  }

  addOrder(order: Order) {
    const orderRef = collection(this.firestore, 'orders');
    return addDoc(orderRef, order);
  }
}
