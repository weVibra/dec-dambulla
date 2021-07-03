import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  price : decprice [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/old/1-monday-db.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}
