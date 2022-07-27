import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  result :any=[];
  constructor( private ProductService:ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    return this.ProductService.getAllProduct().subscribe(data =>{
      this.result=data;
      // console.log(data)
    })
    
  }
  deleteProduct(id:number){
    return this.ProductService.deleteProduct(id).subscribe(data =>{
      this.result= this.result.filter((item : any) =>{
        return item.id != id;
      })
      alert('Xóa thành công')
    })
  }
  
}
