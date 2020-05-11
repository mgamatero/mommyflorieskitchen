import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; //Reactive forms
  email: string;
  password: string;

  constructor( private afAuth:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginEmail() {
    this.afAuth
      .emailLogin(this.loginForm.value.email, this.loginForm.value.password)
          .then(success => {
     alert('Welcome Pat & Bea')
        this.router.navigate(["/"]);
      })
      .catch(err => {
        alert(err.message);
      });
  }
}
