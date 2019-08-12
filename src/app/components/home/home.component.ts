import { Component, OnInit } from '@angular/core';
import { OrgService } from '../../services/org.service';
import { Data } from '../../links/minidata-model';
import { DATA } from '../../links/minidata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  DATA: Data[] = DATA;
  imgOrg = [];

  constructor(private orgService: OrgService) {
    this.orgService.getData().subscribe(Data => this.imgOrg = Data)
   }

  ngOnInit() {
    this.orgService.getData();
  }

}
