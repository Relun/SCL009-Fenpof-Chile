import { Component, OnInit } from '@angular/core';

import { OrgService } from '../../services/org.service';
import { PostUserService } from '../../services/post-user.service'

import { Data } from '../../links/minidata-model';
import { DATA } from '../../links/minidata';
import { Postuser } from 'src/app/post-user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Variables organizaciones
  DATA: Data[] = DATA;
  imgOrg = [];
  // variables eventos
  published_event: Postuser[];

  constructor(private orgService: OrgService, public postUserService: PostUserService) {
    // Organizaciones
    this.orgService.getData().subscribe(Data => this.imgOrg = Data);

    // Eventos
        this.postUserService.getRead().subscribe(postuser =>{
           this.published_event = postuser; 
    });
   }

  ngOnInit() {
    this.orgService.getData();
  }

  page_size: number = 2;

}
