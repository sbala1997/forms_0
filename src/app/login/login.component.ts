import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private route: Router, private Auth:AngularFireAuth){}

  onSubmit(){
    this.Auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.password)
    .then((res)=>{
      console.log(res);
      this.route.navigateByUrl('/dashboard');
    }).catch((err)=>{
      alert(err);
      this.route.navigateByUrl('/login');
      this.loginForm.reset();
    })
  }

}
