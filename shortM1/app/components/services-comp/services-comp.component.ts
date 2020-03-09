import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-services-comp',
  templateUrl: './services-comp.component.html',
  styleUrls: ['./services-comp.component.css']
})
export class ServicesCompComponent implements OnInit{

  constructor(
    public todoService: TodoServiceService,
    public postService: PostServiceService
  ){}
  
  ngOnInit() {
    this.todoService.getTodos().subscribe((res) => {console.log(res)})
    this.postService.getPosts().subscribe((res) => {console.log(res)})

  }

}
