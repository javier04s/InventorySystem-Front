import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  standalone: false,
  
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent {
  product: Product = new Product();
  id: number;

  constructor(private productService: ProductService, private path: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.path.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      {
        next: (data) => this.product = data,
        error: (errors: any) => console.log(errors)
      }
    );
  }

  onSubmit() {
    this.saveProduct();
  }

  saveProduct() {
    this.productService.editProduct(this.id, this.product).subscribe(
      {
        next: (data) => this.goListProducts(),
        error: (errors) => console.log(errors)
      }
    );
  }

  goListProducts() {
    this.router.navigate(['/products']);
  }
  
}
