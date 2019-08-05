import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }


  /* M E T O D O S*/

  /* metodo I */
  registerUser(email:string, password:string) {
   return new Promise((resolve, reject) => {
     this.afsAuth.auth.createUserWithEmailAndPassword(email,password)
     .then(userData => resolve(userData),
     err => reject(err));
   });
  }

  /* metodo II  CNCOD */ 
  loginEmailUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  /* metodo III CNCOD*/
  loginFacebookUser() {
   return  this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  /* metodo IV */
  loginGoogleUser() {
   return  this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  /* metodo V  CNCOD*/
  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  /* metodo VI CONCOD*/
  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }







}
