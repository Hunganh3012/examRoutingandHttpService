import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login();
   }
  logout(){
    this.authService.logout();
  }
}