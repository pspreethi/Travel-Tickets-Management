import { Booking, SeatConfirm } from './../Models/booking';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  readonly rootUrl = 'http://localhost:57890';

  constructor(private httpclient: HttpClient, private router: Router, private userservice: UserService) { }

  ConfirmBooking(booking: Booking){
    const body: Booking = {
      Start : booking.Start,
      End : booking.End,
      Date : booking.Date,
      Seat : booking.Seat,
      BusID : booking.BusID,
      Email : booking.Email
    }

    return this.httpclient.post(this.rootUrl + '/api/Bookings', body);



  }
  ConfirmSeat(seatconfirm: SeatConfirm){
    const body: SeatConfirm={
      BusID: seatconfirm.BusID,
      Seat: seatconfirm.Seat
    }
    return this.httpclient.post(this.rootUrl + '/api/SeatConfirm', body);
  }
}
