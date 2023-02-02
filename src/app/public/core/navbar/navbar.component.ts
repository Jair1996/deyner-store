import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = true;
  userLoggedIn: User | null = null;

  totalObservable!: Observable<number>;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
    this.authService.authState().subscribe((data) => {
      if (data) {
        const id = data.uid;

        this.userService
          .getUser(id)
          .then((user) => {
            const { name, lastname, role } = user.data() as User;
            this.userLoggedIn = {
              id,
              name,
              lastname,
              role,
            };
          })
          .catch(console.error);
      } else {
        this.userLoggedIn = null;
      }
    });
  }

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.toogleMenu();
    this.authService.logout();
  }
}
