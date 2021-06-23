import { UserService } from './Services/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
 /*  authUser(user: any){
  let UserArray =[];
  if (localStorage.getItem('User')){
    UserArray = JSON.parse(localStorage.getItem('User') || '{}');
  }
  return UserArray.find(p=>p.Email === user.Email && p.Password === user.password)
} */
  readonly rootUrl = 'http://localhost:57890';

  constructor( private http: HttpClient) { }
  redirectUrl: string;
  login(Email: string, password: string){
    return this.http.post<any>(this.rootUrl+'api/Auth', {Email: Email, password: password})
    .pipe(map(user => {
      if (user.ID && user.status) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }),
    catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.status === 0) {           // client side error
      console.error('An error occurred:', error.error.message);
    } else {                            // api server response unsuccessful
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
