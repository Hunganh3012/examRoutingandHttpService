import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'; // dùng [(ngModel)]
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
@NgModule({
    declarations: [ProductAddComponent],
    imports : [CommonModule,FormsModule],

})
export class ProductAddModule { };