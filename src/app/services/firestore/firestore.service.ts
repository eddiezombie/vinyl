import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo gato
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('vinyl').add(data);
  }
  //Obtiene un gato
  public getCat(documentId: string) {
    return this.firestore.collection('vinyl').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getCats() {
    return this.firestore.collection('vinyl').snapshotChanges();
  }
  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('vinyl').doc(documentId).set(data);
  }

  //Obtiene vinilos
  public getVinyls() {
    return this.firestore.collection('vinyl').valueChanges(); 
  }

  //filter
  filterBy(name: string) {
    return this.firestore.collection('vinyl', ref => ref.where('name','==', name )).valueChanges()
  };

}