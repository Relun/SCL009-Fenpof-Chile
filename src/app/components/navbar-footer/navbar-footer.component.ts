import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.css']
})
export class NavbarFooterComponent implements OnInit {

  // mostrar=false;
    // loren(){ alert('loren');}
    //  loren: boolean = false;

    //  show(){
    //   this.loren=true;
    // }
    mostrar:boolean;
  constructor() { }

  ngOnInit() {
  }

  activar():void{
    this.mostrar = true;

  }
}
