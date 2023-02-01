import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-prduct-page',
  templateUrl: './prduct-page.component.html',
  styleUrls: ['./prduct-page.component.scss'],
})
export class PrductPageComponent implements OnInit {
  product!: Product;
  selectedImage = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idProduct = this.route.snapshot.paramMap.get('idProducto')!;

    this.productService.getProduct(idProduct).then((resp) => {
      this.product = {
        id: resp.id,
        ...(resp.data() as Product),
      };

      this.selectedImage = this.product.images[0];
      console.log(this.product);
    });
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
