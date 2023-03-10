import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { Observable, of, switchMap } from 'rxjs';
import { AuthModel } from '../models/auth.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn: User | null = null;

  constructor(private auth: Auth, private userService: UserService) {}

  login({ email, password }: AuthModel) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: AuthModel) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  authState() {
    return authState(this.auth);
  }

  isLoggedInAndIsAdmin(): Observable<boolean> {
    return this.authState().pipe(
      switchMap((data) => {
        if (!data) return of(false);

        const id = data.uid;

        return this.userService.isAdmin(id);
      })
    );
  }
}
