import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
//   loren: boolean = false;

//   show(){
//    this.loren=true;
 
//  }
mostrar:boolean;
  constructor() { }

  ngOnInit() {
  }
  activar():void{
    this.mostrar = true;
  }
}
