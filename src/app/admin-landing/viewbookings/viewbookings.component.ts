import { BookingAdmin } from './../../Models/booking';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/Models/booking';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {
  bookings : BookingAdmin[]=[]

  constructor(private adminservice: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getbookings();
  }
  getbookings(){
    this.adminservice.getBookings().subscribe(data=>{
      console.log(data)
      this.bookings = data

    })
  }

}
