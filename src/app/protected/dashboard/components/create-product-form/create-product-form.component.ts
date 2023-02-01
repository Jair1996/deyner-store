import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent {
  showSpinner: boolean = false;

  registerForm: FormGroup = this.fb.group({
    sku: ['', [Validators.required]],
    name: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    price: ['', [Validators.required]],
    ofert: [0, [Validators.required]],
    gender: ['', [Validators.required]],
    category: ['', [Validators.required]],
    color: ['', [Validators.required]],
    material: ['', [Validators.required]],
    images: this.fb.array(
      [
        ['', Validators.required],
        ['', Validators.required],
        ['', Validators.required],
      ],
      Validators.required
    ),
    description: ['', [Validators.required]],
    best: [false],
  });

  get imageArray() {
    return this.registerForm.get('images') as FormArray;
  }

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  async create() {
    this.showSpinner = true;

    try {
      await this.productService.addProduct(this.registerForm.value);
      Swal.fire('Buen trabajo!', 'El producto se registro correctamente', 'success');
      this.resetForm();
    } catch (error) {
      console.error('error', error);
      Swal.fire('Ooops!', 'Ha ocurrio un error al registrar el producto', 'error');
    } finally {
      this.showSpinner = false;
    }
  }

  resetForm() {
    this.registerForm.reset({
      sku: '',
      name: '',
      brand: '',
      price: '',
      ofert: 0,
      gender: '',
      category: '',
      color: '',
      material: '',
      images: ['', '', ''],
      description: '',
      best: false,
    });
  }
}
