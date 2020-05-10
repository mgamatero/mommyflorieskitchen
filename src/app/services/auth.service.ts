import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  emailLogin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        userData => {
          resolve(userData);
          console.log(userData);
        },
        err => reject(err)
      );
    });
  }

  emailLogout(){
    this.afAuth.signOut();
  }

  isLogged(){
    return this.afAuth.authState
  }
}
