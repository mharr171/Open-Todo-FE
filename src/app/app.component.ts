import { Component } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  responses = [];

  readonly ROOT_URL = 'https://crossorigin.me/http://mharr171.z%40gmail.com:asdf123@open-todo-4893.herokuapp.com/api';

  constructor (private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(this.ROOT_URL + '/lists').subscribe(data => {
      this.responses.push(data);
    });
  }

}
