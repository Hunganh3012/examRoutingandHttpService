import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { ProductModule } from './product/product.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
// import { ProductRoutingModule } from './product/product-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './product/detail/detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [ FormsModule,
    BrowserModule,
    // ProductModule,
    // ProductRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }