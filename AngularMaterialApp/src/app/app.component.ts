import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: Array<any>;


  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('../assets/data.json').map(response => response.json().projects)
      .subscribe(res => this.projects = res);
  }
}
