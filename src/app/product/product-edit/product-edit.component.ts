import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  edit:any =[]
  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private ProductService:ProductService
  ) { }

  ngOnInit(): void {
  this.getDetailProduct();
  }
  getDetailProduct(){
    this.route.params.subscribe((data: any) =>{
      this.ProductService.getDetailProduct(data.id).subscribe(data =>{
        // console.log(data);
        //khi console.log(data) sẽ trả về dữ liệu id,product,price
        this.edit=data;
      })
    })
  }
  editProduct(){
    this.ProductService.editProduct(this.edit.id,this.edit).subscribe(data =>{
      this.Router.navigateByUrl('/product/detail');
      alert('Cập nhật thành công');
    })
  }
}
