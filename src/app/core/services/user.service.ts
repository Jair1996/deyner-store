import { Injectable } from '@angular/core';
import { Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { doc } from '@firebase/firestore';
import { defer, from, map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  getUser(id: string) {
    const productRef = doc(this.firestore, `users/${id}`);
    return getDoc(productRef);
  }

  addUser(user: User, id: string) {
    const userRef = doc(this.firestore, 'users', id);
    return setDoc(userRef, user);
  }

  isAdmin(id: string): Observable<boolean> {
    return defer(() => from(this.getUser(id))).pipe(
      map((user) => {
        const { role } = user.data() as User;

        if (role === 'admin') return true;

        return false;
      })
    );
  }
}
