import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  lists = [];
  title = 'Results title';
  //
  // constructor(private http: HttpClient) { }
  //
  // ngOnInit(): void {
  //   this.http.get('https://crossorigin.me/http://mharr171.z%40gmail.com:asdf123@open-todo-4893.herokuapp.com/api/lists/').subscribe(data => {
  //     this.lists = data['results'];
  //   });
  // }

  ngOnInit() {}
}
