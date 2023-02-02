import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loading: boolean = false;

  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  isTheFieldInvalid(field: string) {
    return this.loginForm.controls[field].invalid;
  }

  async login() {
    this.loading = true;

    try {
      await this.authService.login(this.loginForm.value);
      this.router.navigate(['/']);
    } catch (error) {
      Swal.fire('Ooops!', 'Correo o contraseña incorrecta', 'error');
    } finally {
      this.loading = false;
    }
  }
}
