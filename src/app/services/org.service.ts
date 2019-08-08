import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//data
import { DATA } from '../links/minidata';
//clase
import { Data } from '../links/minidata-model';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor() { }
  //funcion con observable
  getData(): Observable<Data[]> {
    return of(DATA);
  }


}

