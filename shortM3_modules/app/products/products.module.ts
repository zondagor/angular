import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    AllProductsComponent
  ]
})
export class ProductsModule { }
