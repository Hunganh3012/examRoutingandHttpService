import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { ProductAddModule } from './product-add/product-add.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditModule } from './product-edit/product-edit.module';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    // ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ProductAddModule,
    ProductEditModule
  ]
})
export class ProductModule { }