import { Component, OnInit } from '@angular/core';
import { PostUserService } from '../../services/post-user.service'
import {Postuser} from '../../post-user'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  postusers:Postuser[];

  constructor(public postUserService: PostUserService) { }


  ngOnInit() {
    this.postUserService.getRead().subscribe(postuser =>{
           this.postusers = postuser; 
          // console.log(this.postusers);

           let dataOrdenada = this.postusers.sort((a, b) => {
            if (a.fecha < b.fecha) return 1;
            if (a.fecha > b.fecha) return -1;
            return 0;
          });
    
          this.postusers = dataOrdenada;

    });
  }

}
