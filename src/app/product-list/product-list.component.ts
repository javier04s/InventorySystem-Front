import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // Cargar los productos
    this.getProducts();
  }

  private getProducts() {
    // Consumir los datos del observable
    this.productService.getProductsList().subscribe(
      (data => {
        this.products = data;
      })
    );
  }

  editProduct(id: number) {
    this.router.navigate(['edit-product', id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      {
        next: (data) => this.getProducts(),
        error: (errors) => console.log(errors)
      }
    );
  }
}
