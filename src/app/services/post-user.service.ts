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

this.commentary = this.commentaryCollection.snapshotChanges().pipe(map((changes => {
  return changes.map(a => {
    const data = a.payload.doc.data() as Postuser;
  //  data.idFireStore = a.payload.doc.id;
        console.log(data);
    return data;    
});
})
));
}

   /* Funcion que es llamada por post-user.component.ts.
     Mediante los metodos de firebase irá leyendo la coleccion que creo
     en el post y nos retornará lo escrito por el */
     getOrders() {
      this.commentaryCollection = this.afs.collection('commentary');   // Si elimino este codigo, kitchen aparece vacío
      this.commentary = this.commentaryCollection.snapshotChanges().pipe(map((changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Postuser;
      //    data.idFireStore = a.payload.doc.id;
              console.log(data);
          return data;    
      });
      })
      ));
        return this.commentary; 
    
    }

  
}
