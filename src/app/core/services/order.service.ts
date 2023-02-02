import { Injectable } from '@angular/core';
import { addDoc, collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
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

  addOrder(order: Order) {
    const orderRef = collection(this.firestore, 'orders');
    return addDoc(orderRef, order);
  }
}
