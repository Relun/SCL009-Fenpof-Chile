
export class Postuser {
    public id: string;   
    public idFireStore:string; 
    public post: string;
    

      constructor(id: string, post: string, idFireStore:string ) {
          this.id = id;
        this.idFireStore = idFireStore;
          this.post = post;      
      }
  }
  