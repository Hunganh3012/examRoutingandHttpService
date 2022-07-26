import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webrouting';
  results:any;
  constructor(private http:HttpClient) { };
  ngOnInit(){
    this.http.get("https://62de1ee1ccdf9f7ec2d15d4e.mockapi.io/user").subscribe(data => {
      console.log(data);
      this.results=data;
    })
  }
}
