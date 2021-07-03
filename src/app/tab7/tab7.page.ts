import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  price : decprice [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/old/3-wednesday-db.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}