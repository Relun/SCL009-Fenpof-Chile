import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* declaración variables - propiedades */
  public email: string = '';
  public password: string = '';
  public msgError: string = '';

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }
  /*                R   E   G   I   S   T   E   R               */
  onAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then((res) => {
 
    this.router.navigate(['admin']);
    }).catch(err => console.log('err', err.message));
  }
 
}
