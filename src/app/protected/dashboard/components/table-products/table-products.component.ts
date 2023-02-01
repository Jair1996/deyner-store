import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
})
export class TableProductsComponent implements OnInit {
  products: Product[] = [];

  displayedColumns: string[] = ['sku', 'name', 'brand', 'gender', 'price', 'ofert', 'id'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((produts) => {
      this.products = produts;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
    });
  }

  async delete(product: Product) {
    const { isConfirmed } = await Swal.fire({
      title: '¿Está seguro de eliminar el producto ' + product.name + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    });

    if (isConfirmed) {
      try {
        await this.productService.deleteProduct(product);

        Swal.fire('Buen trabajo!', 'El producto se elimino correctamente', 'success');
      } catch (error) {
        Swal.fire('Ooops!', 'Ha ocurrio un error al eliminar el producto', 'error');
        console.error(error);
      }
    }
  }
}
