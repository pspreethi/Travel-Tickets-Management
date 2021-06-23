import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmitUsers(){
    this.router.navigate(['/getUsersAdmin']);
  }
  OnSubmitRoutes(){
    this.router.navigate(['/getRoutesAdmin']);
  }
  OnSubmitBuses(){
    this.router.navigate(['/getBusesAdmin']);
  }
  OnAddRoutes(){
    this.router.navigate(['/addroutes']);
  }
  OnAddBuses(){
    this.router.navigate(['/addbuses']);
  }
  OnSubmitBookings(){
    this.router.navigate(['/viewbookings']);
  }


}
