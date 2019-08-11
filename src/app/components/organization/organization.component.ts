import { Component, OnInit } from '@angular/core';
//servicio
import { OrgService } from '../../services/org.service';
//clase
import { Data } from '../../links/minidata-model';
//DATA
import { DATA } from '../../links/minidata';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  // <img src="assets/" width="200px" />
})
export class OrganizationComponent implements OnInit {
 DATA: Data[] = DATA;
 posts = [];
 
  constructor(private orgService: OrgService ) {
    this.orgService.getData().subscribe(Data =>{
      this.posts = Data;
    })
   }
  
  ngOnInit() {
    this.orgService.getData();
  }

}
