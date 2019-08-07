import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Postuser } from 'src/app/post-user';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
 
commentaryCollection: AngularFirestoreCollection<Postuser>;
commentary: Observable<Postuser[]>;
commentaryDoc: AngularFirestoreDocument<Postuser>;
 
 
 
  constructor(public afs:AngularFirestore) { 
// Lectura de la coleccion "commentary" en Firestore
this.commentaryCollection = this.afs.collection('commentary');  //Inicia la coleccion
}


/* Funcion que es llamada por post-user.component.ts.
     Mediante los metodos de firebase irá leyendo la coleccion que creo
     en el post y nos retornará lo escrito por el */
 getRead() {
     // this.commentaryCollection = this.afs.collection('commentary');   
      this.commentary = this.commentaryCollection.snapshotChanges().pipe(map((changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Postuser;
             data.id = a.payload.doc.id;
              console.log(data);
          return data;    
      });
      })
      ));
      console.log(this.commentary);
        return this.commentary; 
    
    }



  /* Funcion para agregar el post a la coleccion mediante el metodo "add"
   la entregamos con esa estructura de objeto */
  
addPost(postuser : Postuser) {   
    console.log("llegoooooooooooo al service de addpost");
    console.log(postuser.id);  console.log(postuser.post);
    
    this.commentaryCollection.add(
                            {   id : postuser.id,
                                post : postuser.post,
                                date : postuser.date
                              }
                                
                              ).then( _ => alert("Post creado") ); // add es una promesa de firebase
    }
  
}
