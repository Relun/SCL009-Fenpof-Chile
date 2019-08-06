import { Component, OnInit } from '@angular/core';
import { Postuser } from 'src/app/post-user';
import { PostUserService } from 'src/app/services/post-user.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  postusers:Postuser[];

  createPost:Postuser; // se declara para poder tomar el string que trae el html

  constructor( public postUserService: PostUserService ) { }

  ngOnInit() {
    this.postUserService.getRead().subscribe(postuser =>{
      this.postusers = postuser; 
    });

  }


 /*Funcion para crear post y que se guarde en firestore */
  sendPost( mypost : string): void  {
    console.log("Llego hasta sendPost");
   /*llamar a la funcion del servicio, para indicarle que debe enviar este post
    a firebase*/
    console.log(mypost);
    this.createPost = new Postuser('0', mypost); // crear una nueva instancia en cada post
    //this.createPost.post = mypost;


    console.log(this.createPost);
    this.postUserService.addPost(this.createPost); 
  
  }

}
