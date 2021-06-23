import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userN = new User();
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.userN = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    console.log(this.userN)
  }
  OnSubmitSearch(){
    this.router.navigate(['/selectbus']);
  }
  OnSubmitManage(){
    this.router.navigate(['/profile']);
  }
  Onlogout(){
     this.userservice.logout();
     alert("Are you sure?")
     this.router.navigate(['/home']);
  }
}
