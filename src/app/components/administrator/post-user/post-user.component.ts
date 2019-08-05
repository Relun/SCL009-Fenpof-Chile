import { Component, OnInit } from '@angular/core';
import { Postuser } from 'src/app/post-user';
import { PostUserService } from 'src/app/services/post-user.service'

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  postusers:Postuser[];

  constructor( public postUserService: PostUserService ) { }

  ngOnInit() {
    this.postUserService.getRead().subscribe(postuser =>{
      this.postusers = postuser; 
    });

  }


  sendPost(): void  {
    console.log("Llego hasta sendpost");
   /*llamar a la funcion del servicio, para indicarle que debe enviar este post
    a firebase*/
   //  this.postUserService.addPost(this.postuser); 
 
  
   }

}
