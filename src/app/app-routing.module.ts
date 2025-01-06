import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

// Peticion por defecto (http://localhost:4200/products)
const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
