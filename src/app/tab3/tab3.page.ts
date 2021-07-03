import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface decdirectory {
  no: string;
  name: string;
  category: string;
  contact: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  directory : decdirectory [] = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    let url = "assets/database/directory.json";
  

  this.http.get<decdirectory[]>(url)
  .subscribe(data=>{
    this.directory = data;
  })

  }

}
