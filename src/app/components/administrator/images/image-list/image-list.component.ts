import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';







@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];
  public isLogged: boolean = false;
  constructor(private service: ImageService, private authService: AuthService, private router: Router, private afsAuth: AngularFireAuth) { }





  ngOnInit() {
    this.getCurrentUser();
    this.service.getImageDetailList();
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
       
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
      }
    );
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





}