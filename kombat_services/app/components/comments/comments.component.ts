import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentModel } from 'src/app/models/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentModel[] = [];

  constructor(private commentsS: CommentsService) {
    this.commentsS.getComments().subscribe(res => {
      this.comments = res;
    });
  }

  ngOnInit() {}
}
