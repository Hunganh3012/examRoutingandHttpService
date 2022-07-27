import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private http:HttpClient) { }
  ngOnInt(){
    this.getAllProduct();
  }
  API_URL=" https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/user"
  //Xuất ra list 
  getAllProduct(){
    return this.http.get(`${this.API_URL}`);
  }
  addProduct( data:any){
    return this.http.post(this.API_URL,data)
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  getDetailProduct(id:number){
    return this.http.get(`${this.API_URL}/${id}`)
  }
  editProduct( id:number,data:any){
    return this.http.put(`${this.API_URL}/${id}`,data)
  }
}
