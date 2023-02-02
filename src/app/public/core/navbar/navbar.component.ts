import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = true;
  totalObservable!: Observable<number>;

  constructor(private cartService: CartService, public authService: AuthService) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
  }

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.toogleMenu();
    this.authService.logout();
  }
}
