import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'ff', component: AllProductsComponent}])
  ],
  exports:[
    RouterModule
  ]
})
export class ProductRoutingModule { }
