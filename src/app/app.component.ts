import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor (private http:HttpClient) {

  }


  getData()
  {
    this.http.get('https://fakestoreapi.com/products?limit=5')

    .subscribe((data) => {

    this.data = data
  }
    )

}
}
