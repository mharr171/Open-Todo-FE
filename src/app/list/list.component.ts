import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  title = 'Results title';

  responses = [];

  readonly ROOT_URL = 'https://crossorigin.me/http://mharr171.z%40gmail.com:asdf123@open-todo-4893.herokuapp.com/api';

  constructor (private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(this.ROOT_URL + '/lists').subscribe(data => {
      this.responses.push(data);
    });
  }
}
