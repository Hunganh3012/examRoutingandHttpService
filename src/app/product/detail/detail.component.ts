import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
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
      console.log(data)
    })
    
  }
  
}
