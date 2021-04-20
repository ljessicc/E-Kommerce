import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  logged: boolean | undefined;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  login(email:string, password:string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      this.user = userCredential.user;
      this.router.navigate(['admin']);
      this.logged = true;
      console.log(this.user);
      console.log(this.logged);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
  }
}
