import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ImageService } from 'src/app/shared/image.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  public isLogged: boolean = false;

  constructor(private storage: AngularFireStorage, private service: ImageService,private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.getCurrentUser();
  }

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)

  })

  getCurrentUser(){

    this.authService.isAuth().subscribe(auth => {

      if(auth){
        console.log('user logged');
        this.isLogged = true;
       

      } else {
        console.log('user NOT logged');
        this.isLogged = false;
        this.router.navigate(['about']);
      }

    });
  } 

  showPreview(event: any) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];

    } else {

      this.imgSrc = '../../../../../assets/imgregistrelogin/image_placeholder.jpg';
      this.selectedImage = null;
    }
    console.log(event)

  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').splice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();

          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      category: 'Animal'
    });
    this.imgSrc = '../../../../../assets/imgregistrelogin/image_placeholder.jpg';
    this.isSubmitted = false;
    this.selectedImage = null;

  }




}
