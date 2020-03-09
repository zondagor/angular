import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(
    public http:HttpClient
  ) { }

  ngOnInit() {
  }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
