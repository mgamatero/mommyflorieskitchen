import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
// import { Recipe } from '../models/recipe';
import { Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFBService {

  constructor(public db:AngularFirestore) { }

 retrieveWeekDateText(){
    return this.db.collection('weeklytext').doc('text').snapshotChanges();
  }

 retrieveUlam(){
    return this.db.collection('weeklyulam').snapshotChanges();
  }


   //------------------------------  add Text ---------------------------------------
   addText(textFromForm: any) {
    // workaround for empty doc issue
    // const id = this.afs.createId();
    this.db
      .collection('weeklytext')
      .doc('text')
      .set(textFromForm as any)
      .then(() => {
        alert(`Week updated`);
      });
  }



   //------------------------------  add Ulam ---------------------------------------
   addUlam(ulamFromForm) {
    // workaround for empty doc issue
    const id = this.db.createId();
    this.db
      .collection('weeklyulam')
      .doc(id)
      .set(ulamFromForm as any)
      .then(() => {
        alert(`Ulam added`);
      });
  }
}
