import { Booking, BookingAdmin } from './../Models/booking';
import { UserView } from './../Models/user';
import { Observable, throwError } from 'rxjs';
import { AdminUser } from './../Models/login-user';
import { BusRoute, BusRouteAdmin } from './../Models/bus-route';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetBus } from '../Models/bus';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  readonly rootUrl = 'http://localhost:57890';
  constructor(private http: HttpClient) { }

getUsers(): Observable<UserView[]>{
    return this.http.get<UserView[]>(this.rootUrl + '/api/Users');
}
getBuses(): Observable<GetBus[]>{
  return this.http.get<GetBus[]>(this.rootUrl + '/api/Buses');
}
getRoutes(): Observable<BusRouteAdmin[]>{
  return this.http.get<BusRouteAdmin[]>(this.rootUrl + '/api/Routes');
}
getBookings(): Observable<BookingAdmin[]>{
  return this.http.get<BookingAdmin[]>(this.rootUrl + '/api/Bookings');
}
AddRoutes(busroute: BusRoute){
    const body: BusRoute ={
      Start:  busroute.Start,
      End: busroute.End,
    }
    return this.http.post(this.rootUrl + '/api/Routes',body);
}
AddBuses(addbus: GetBus){
  const body: GetBus ={
    BusName:  addbus.BusName,
    Time: addbus.Time,
    Fare: addbus.Fare,
    Seats: addbus.Seats,
    RouteID: addbus.RouteID
  }
  return this.http.post(this.rootUrl + '/api/Buses',body);
}
LoginAdmin(adminUser: AdminUser){
  const body: AdminUser={
    Email: adminUser.Email,
    Password: adminUser.Password
  }
  return this.http.post(this.rootUrl+'/api/Admin', body).pipe(catchError(this.handleError))
  /* .pipe(map(user => {
    if (user){
      localStorage.setItem('currentUser', JSON.stringify(user));

    }
  })) */
}
logout() {
  localStorage.removeItem('loggedUser');
}
private handleError(error: HttpErrorResponse): any {
  if (error.status === 400) {           // client side error
    console.error('An error occurred:', error.error.message);
  } else {                            // api server response unsuccessful
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'Something bad happened; please try again later.');
}
}
