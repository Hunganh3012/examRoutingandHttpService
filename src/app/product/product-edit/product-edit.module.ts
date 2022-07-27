import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductEditComponent } from "./product-edit.component";
@NgModule({
    declarations:[ProductEditComponent],
    imports: [
        FormsModule,
        CommonModule
    ],
})
export class ProductEditModule { } ;