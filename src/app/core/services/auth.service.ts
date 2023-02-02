import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
} from '@angular/fire/auth';
import { map, Observable } from 'rxjs';
import { AuthModel } from '../models/auth.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
