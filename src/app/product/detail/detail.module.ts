import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule,HttpClientModule],

  
})

export class DetailModule { }
