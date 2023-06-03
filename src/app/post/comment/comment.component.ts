import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Comment } from 'src/app/models/postEcomm.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()  comment !: Comment;
  
}