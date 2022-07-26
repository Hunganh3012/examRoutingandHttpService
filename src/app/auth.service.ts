import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthrized=false;
  constructor(){ }
  login(){
    this.isAuthrized=true;
  }
  logout(){
    this.isAuthrized=false;
  }
}
