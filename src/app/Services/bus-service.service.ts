import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Bus } from '../Models/bus';
import { BusRoute } from '../Models/bus-route';


@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private routeId= new BehaviorSubject <string> ('');
  castId$ = this.routeId.asObservable();
  readonly rootUrl = 'http://localhost:57890';

  constructor(private http:HttpClient) { }
  getRoute(busroute: BusRoute){
    const body: BusRoute ={
      Start:  busroute.Start,
      End: busroute.End,
    }
    return this.http.post(this.rootUrl+'/api/RouteResponse', body).pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.status === 400) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  getAllBus(routeId: any): Observable<Bus[]>{
    console.log(routeId)
    console.log(this.rootUrl + 'api/RouteResponse?routeid='+ routeId)
    return this.http.get<Bus[]>(this.rootUrl + '/api/RouteResponse?routeid='+ routeId);

 }

 getRouteMessage(routeId: any){
   this.routeId.next(routeId)
 }

}
