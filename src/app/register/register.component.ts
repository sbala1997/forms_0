import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // auth =getAuth();
  constructor(private route:Router, private auth: AngularFireAuth){}

  onSubmit(){
    this.auth.createUserWithEmailAndPassword(this.registerForm.value.email,this.registerForm.value.password)
    .then(((res)=>{
    console.log(res);
    this.route.navigateByUrl('/dashboard');
  }))
    .catch((err)=>{
      alert(err);
      this.route.navigateByUrl('/register');
      this.registerForm.reset();
    })
  }
}


