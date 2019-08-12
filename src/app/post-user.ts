
import { Timestamp } from 'rxjs/internal/operators/timestamp';


export class Postuser {
    public id: string;   
    public idFireStore:string; 
    public post: string;
    public fecha : number;
    public myPostTitle : string;
    public photo : string;

      constructor(id: string, post: string, idFireStore:string, myPostTitle:string, photo : string ) {
          this.id = id;
        this.idFireStore = idFireStore;
          this.post = post; 
          this.myPostTitle = myPostTitle;
          this.photo = photo;     
      }
  }
  