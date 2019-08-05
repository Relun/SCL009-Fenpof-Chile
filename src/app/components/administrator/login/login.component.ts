import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* declaración variables - propiedades */
  public email: string = '';
  public password: string = '';


  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {} 

  /*                      L   O   G  I   N                       */



  /*    método autentificacion    *** LOGIN ***   EMAIL PASSWORD */
  onLogin(): void {
    console.log('mail  :' + this.email);
    console.log('pas : ' + this.password)
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  /*    método autentificacion    *** LOGIN ***   GOOGLE         */
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        //console.log(res);
       this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  /*    método autentificacion    *** LOGIN ***   FACEBOOK       */
  onLoginFacebook() {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => { console.log('err', err.message) });
  }

  /*    método autentificacion    *** L O G O U T ***   SESSION */
  onLogout() {
    this.authService.logoutUser();
  }

  /*    método autentificacion    *** redirección  ***   ROUTER */
  onLoginRedirect():void {
    this.router.navigate(['admin']);
  }


}
