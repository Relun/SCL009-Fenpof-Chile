import { Component, OnInit } from '@angular/core';
import { Postuser } from 'src/app/post-user';
import { PostUserService } from 'src/app/services/post-user.service';

import { ImageService } from 'src/app/shared/image.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';





@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {
  public isLogged: boolean = false;
  postusers:Postuser[];

  createPost:Postuser; // se declara para poder tomar el string que trae el html

  constructor( public postUserService: PostUserService,private service: ImageService, private authService: AuthService, private router: Router, private afsAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.postUserService.getRead().subscribe(postuser =>{
      this.postusers = postuser; 
    });

  }

  getCurrentUser(){

    this.authService.isAuth().subscribe(auth => {

      if(auth){
        console.log('user logged');
        this.isLogged = true;

      } else {
        console.log('user NOT logged');
        this.isLogged = false;
      }

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
