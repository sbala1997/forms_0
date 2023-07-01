import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent {
email:string=''
constructor(private auth:AngularFireAuth){}

handleEvent(event){
  
  this.email=event.target.value;
  
}

sendEmail(){
  console.log(this.email)
  this.auth.sendPasswordResetEmail(this.email).then(
    (res)=>{
      console.log(res);
    }
  ).catch(
    (res)=>{
      console.log(res.message)
    }
  )
}

}
