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


 testretrieveUlam(){
    return this.db.collection('testweeklyulam').snapshotChanges();
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

   //------------------------------  add Ulam ---------------------------------------
   testaddUlam(ulamFromForm) {
    // workaround for empty doc issue
    const id = this.db.createId();
    this.db
      .collection('testweeklyulam')
      .doc(id)
      .set(ulamFromForm as any)
      .then(() => {
        alert(`Ulam added`);
      });
  }

    //-------------------------------- delete recipe --------------------------------------
    testdeleteUlam(ulam) {
      return this.db
        .doc(`testweeklyulam/${ulam.id}`)
        .delete()
        .then(() => {
          alert(`${ulam.ulamName} successfully deleted!`);
        })
        .catch((e) => {
          alert('Error: ');
        });
    }

    //  -------------------------------- get 1 dish based on ID -----------------------------
    testgetDishByID(id:string){
      return this.db.doc(`testweeklyulam/${id}`).snapshotChanges()
    }
}
