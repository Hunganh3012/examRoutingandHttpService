import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
