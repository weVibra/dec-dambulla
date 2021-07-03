import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface myblog {
  id: string;
  date: string;
  title: string;
  caption: string;
  poster: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

blogs : myblog [] = [];

constructor(private http: HttpClient) {}

ngOnInit() {

let url = "assets/database/blog.json"; 

    this.http.get<myblog[]>(url)
    .subscribe(data=>{
      this.blogs = data;
    })

  }

}
