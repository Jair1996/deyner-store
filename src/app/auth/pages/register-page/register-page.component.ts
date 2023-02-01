import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  registerForm: FormGroup = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
    password: ['', [Validators.required, Validators.minLength(4)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(private fb: FormBuilder) {}

  isTheFieldInvalid(field: string) {
    return this.registerForm.controls[field].invalid;
  }
}
