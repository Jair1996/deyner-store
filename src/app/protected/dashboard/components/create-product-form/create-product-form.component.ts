import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent {
  registerForm: FormGroup = this.fb.group({
    sku: ['', [Validators.required]],
    name: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    price: ['', [Validators.required]],
    ofert: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    category: ['', [Validators.required]],
    color: ['', [Validators.required]],
    material: ['', [Validators.required]],
    image1: ['', [Validators.required]],
    image2: ['', [Validators.required]],
    image3: ['', [Validators.required]],
    description: ['', [Validators.required]],
    best: [false],
  });

  constructor(private fb: FormBuilder) {}

  create() {
    console.log(this.registerForm.value);
    this.registerForm.reset({
      sku: '',
      name: '',
      brand: '',
      price: '',
      ofert: '',
      gender: '',
      category: '',
      color: '',
      material: '',
      image1: '',
      image2: '',
      image3: '',
      description: '',
      best: false,
    });
  }
}
