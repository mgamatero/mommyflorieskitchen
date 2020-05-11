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

  //-----------------------Get Date from Firebase -----------------------------------
 retrieveWeekDateText(){
    return this.db.collection('weeklytext').doc('text').snapshotChanges();
  }

  //----------------------Get all Ulams from Firebase--------------------------------
 retrieveUlam(){
    return this.db.collection('weeklyulam').snapshotChanges();
  }


   //----------- Add The Weekly Date (it really acts like an update, since .doc is always 'text') ---------------
   addText(textFromForm: any) {
      this.db
      .collection('weeklytext')
      .doc('text')
      .set(textFromForm as any)
      .then(() => {
        alert(`Week updated`);
      });
  }



   //------------------------- add Ulam ---------------------------------------
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


    //-------------------------------- delete Ulam --------------------------------------
    deleteUlam(ulam) {
      return this.db
        .doc(`weeklyulam/${ulam.id}`)
        .delete()
        .then(() => {
          alert(`${ulam.ulamName} successfully deleted!`);
        })
        .catch((e) => {
          alert('Error: ');
        });
    }

    //  ---------------------------- get 1 dish based on ID -----------------------------
    getDishByID(id:string){
      return this.db.doc(`weeklyulam/${id}`).snapshotChanges()
    }
    updateDish(ulam:any,id:string){
        this.db
        .collection('weeklyulam')
        .doc(id)
        .set(ulam as any)
        .then(() => {
          alert(`${ulam.ulamName} updated`);
         })
    }
}
