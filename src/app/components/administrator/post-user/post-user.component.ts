import { Component, OnInit } from '@angular/core';
import { Postuser } from 'src/app/post-user';
import { PostUserService } from 'src/app/services/post-user.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';




@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})

export class PostUserComponent implements OnInit {

  /*  1.    AUTENTIFICACION FOR POST */
  public isLogged: boolean = false;
  /*  2.    POST COMENT */
  postusers: Postuser[];
  createPost: Postuser; // se declara para poder tomar el string que trae el html
  mypost: string;
  /* 3.    IMG FOR POST  */
  selectedImagePost: any = null;
  imgSrcPost: string;
  /* isSubmitted: boolean;*/

  /* PRINT IMAGE */
  imageList: any[];


  constructor(public postUserService: PostUserService,
 
  
    private storage: AngularFireStorage) { }

  ngOnInit() {
    /* I */
    this.resetFormPost();
    /* this.getCurrentUser();*/
    this.postUserService.getRead().subscribe(postuser => {
      this.postusers = postuser;
    });





  }

  //1ero --> CREATION   FORM 
  formTemplatePost = new FormGroup({
  
    description_event: new FormControl('', Validators.required),
    categoryPost: new FormControl(''),
    imageUrlPost: new FormControl('', Validators.required),
    date: new FormControl('',Validators.required)
  });


 
  // function save image form in html

  onSubmitPost(formValue) {

    console.log("la fx onSubmitPost en click")
    console.log("formValue :" + formValue)
    /* this.isSubmitted = true;*/
    /* if (this.formTemplatePost.valid) {*/
    var filePathPost = `${formValue.categoryPost}/${this.selectedImagePost.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;

    console.log(" selectedImagePost :" + JSON.stringify(this.selectedImagePost.name));

    console.log("filePathPost :" + filePathPost)

    const fileRefPost = this.storage.ref(filePathPost);

    console.log("  fileRefPost: " + JSON.stringify(fileRefPost))
    this.storage.upload(filePathPost, this.selectedImagePost).snapshotChanges().pipe(
      finalize(() => {
        fileRefPost.getDownloadURL().subscribe((url) => {
          formValue['imageUrlPost'] = url;
         /* this.service.insertImageDetails(formValue);*/
          this.resetFormPost();
         
        })
      })
    ).subscribe();
    /*}*/
  }

  showPreviewPost(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrcPost = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImagePost = event.target.files[0];
    } else {

      this.selectedImagePost = null;
    }
    console.log(event)
  }

  resetFormPost() {

    this.formTemplatePost.reset();
    this.formTemplatePost.setValue({
      date:'',
      description_event:'',
      imageUrlPost: '',
      categoryPost: 'Event 2019'
    });
    this.imgSrcPost = '../../../../../assets/imgregistrelogin/image_placeholder.jpg';
    /* this.isSubmitted = false;*/
    this.selectedImagePost = null;
    
  }

  /*
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
  */
  /*Funcion para crear post y que se guarde en firestore */
  sendPost(mypost: string): void {
    console.log("Llego hasta sendPost");
    /*llamar a la funcion del servicio, para indicarle que debe enviar este post
     a firebase*/
    console.log("MYPOST : " + mypost);
    this.createPost = new Postuser('0', mypost, 'fire'); // crear una nueva instancia en cada post
    //this.createPost.post = mypost;
    console.log("CREATEPOST  : " + JSON.stringify(this.createPost));
    this.postUserService.addPost(this.createPost);
  }

  /*Elimina el ID de Firestore */
  deleteCommentary(postuser: Postuser) {
    const response = confirm('¿Quieres eliminar esta publicacion?');
    if (response) {
      this.postUserService.deletePost(postuser);
    }
    return;


}
}
