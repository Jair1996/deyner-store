import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  loading: boolean = false;

  registerForm: FormGroup = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  isTheFieldInvalid(field: string) {
    return this.registerForm.controls[field].invalid;
  }

  async register() {
    this.loading = true;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const name = this.registerForm.get('name')?.value;
    const lastname = this.registerForm.get('lastname')?.value;

    const user: User = {
      name,
      lastname,
      role: 'user',
    };

    try {
      const userCredential = await this.authService.register({ email, password });
      await this.userService.addUser(user, userCredential.user.uid);
      this.router.navigate(['/']);
    } catch (error) {
      Swal.fire('Ooops!', 'Ha ocurrio un error al registrar el usuario', 'error');
    } finally {
      this.loading = false;
    }
  }
}
