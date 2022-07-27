import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  result:any = {
    id: '',
    product: '',
    price: ''
  }
  constructor( private ProductService:ProductService,
    private Router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.ProductService.addProduct(this.result).subscribe(data =>{
      alert('Thêm sản phẩm thành công')
        this.Router.navigateByUrl('/product/detail');
    })
  }

}
