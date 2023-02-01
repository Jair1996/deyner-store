import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.scss'],
})
export class BestProductsComponent implements OnInit {
  bestProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getBestProducts().subscribe((products) => {
      this.bestProducts = products;
    });
  }
}
