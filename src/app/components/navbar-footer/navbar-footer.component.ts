import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.css']
})


export class NavbarFooterComponent implements OnInit {
  public isLogged: boolean = false;



  constructor( private authService: AuthService, private afsAuth: AngularFireAuth) { }


  ngOnInit() {
    this.getCurrentUser();
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


  onLogout(){
    this.afsAuth.auth.signOut();
  }




}
