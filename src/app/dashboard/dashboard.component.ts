import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private auth:AngularFireAuth,private route:Router){}
  
  logout(){
    this.auth.signOut().then((res)=>{
      alert('logged out successfully');
    }).catch((err)=> alert(err))
    this.route.navigateByUrl('/login');
  }
}
