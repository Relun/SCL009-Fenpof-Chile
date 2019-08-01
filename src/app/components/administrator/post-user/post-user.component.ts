import { Component, OnInit } from '@angular/core';
import { Postuser } from 'src/app/post-user';
import { PostUserService } from 'src/app/services/post-user.service'

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  postuser:Postuser[];

  constructor( private postUserService: PostUserService ) { }

  ngOnInit() {
  }

}
