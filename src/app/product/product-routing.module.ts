import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "app/auth.guard";
import { DetailComponent } from "./detail/detail.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product.component";

const productRoutes:Routes=[
        {
          path: '',
          component: ProductComponent,
          
          children:[
            {
              path:'detail',
              component:DetailComponent,
              canActivate:[AuthGuard],
            },
            {
              path:'add',
              component:ProductAddComponent
            },
            {
              path: "",
              component:ProductListComponent
            },
            // {
            //   path: ':id',
            //   component:ProductDetailComponent
            // },
           
          ]
        },
         
      ];
@NgModule({
   
    imports:[
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { };