import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMenu: boolean = true;

  totalObservable!: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.totalObservable = this.cartService.getTotalProductsInCart;
  }

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }
}
