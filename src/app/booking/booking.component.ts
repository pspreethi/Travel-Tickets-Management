import { User } from './../Models/user';
import { Booking } from './../Models/booking';
import { Journey, seat } from './../Models/journey';
import { Router } from '@angular/router';
import { BookingService } from './../Services/booking.service';
import { Component, OnInit } from '@angular/core';
import { Seat } from '../Models/seat';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
bookingdetails: Journey
/* seats:seat[]=[]; */
user: User
message: string;
submitted: boolean;

  constructor(private bookingservice: BookingService, private router: Router, ) { }

  ngOnInit(){
    this.bookingdetails = JSON.parse(localStorage.getItem("journey")|| '{}');
    /* this.seats = this.bookingdetails.seats;
    console.log(this.seats) */
    this.user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
  }
  ConfirmBooking(){
    let journey = JSON.parse(localStorage.getItem("journey")|| '{}');
    let user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let seats = journey.seats;
    for (let s in seats){
      let booking: Booking = {
        Start : journey.journey_route.Start,
        End : journey.journey_route.End,
        Date: journey.journey_route.Date,
        Seat: seats[s],
        BusID: journey.bus.BusId,
        Email:  user.Email
      }
      this.bookingservice.ConfirmBooking(booking).subscribe(data=>{
        this.submitted = true;
        console.log(data)
        if (this.submitted == true){
          this.message="Booking Confirmed!!"
        }
      })

    }

  }

}
