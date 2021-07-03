import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  price : decprice [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/old/4-thursday-db.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}
