import { Component, OnInit } from '@angular/core';
import { User } from './core/models/user.model';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.authService.authState().subscribe((data) => {
      if (data) {
        const id = data.uid;

        this.userService
          .getUser(id)
          .then((user) => {
            const { name, lastname, role } = user.data() as User;
            this.authService.userLoggedIn = {
              id,
              name,
              lastname,
              role,
            };
          })
          .catch(console.error);
      } else {
        this.authService.userLoggedIn = null;
      }
    });
  }
}
