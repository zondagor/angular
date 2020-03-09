import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(
    public http:HttpClient
  ) { }

  ngOnInit() {
  }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
