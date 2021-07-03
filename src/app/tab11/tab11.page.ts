import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-tab11',
  templateUrl: './tab11.page.html',
  styleUrls: ['./tab11.page.scss'],
})
export class Tab11Page implements OnInit {

  price : decprice [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/old/7-sunday-db.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}