import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {

  price : decprice [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/old/2-tuesday-db.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}