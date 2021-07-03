import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decprice {
  id: string;
  name: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  price : decprice [] = [];

  slideOpts = {
    initialSlide: 1,
    autoplay: true,
    speed: 600
  };

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "https://www.rncoe.lk/podcast.json";
  

  this.http.get<decprice[]>(url)
  .subscribe(data=>{
    this.price = data;
  })

  }

}
