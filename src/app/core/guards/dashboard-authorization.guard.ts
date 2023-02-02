import { Injectable } from '@angular/core';
import { CanActivate, CanMatch, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardAuthorizationGuard implements CanActivate, CanMatch {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedInAndIsAdmin().pipe(
      tap((result) => {
        if (!result) {
          this.router.navigate(['/']);
        }
      })
    );
  }
  canMatch(): Observable<boolean> {
    return this.authService.isLoggedInAndIsAdmin().pipe(
      tap((result) => {
        if (!result) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
