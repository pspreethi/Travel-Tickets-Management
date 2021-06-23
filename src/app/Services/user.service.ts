import { Router } from '@angular/router';
import { BusRoute } from './../Models/bus-route';
import { LoginUser } from './../Models/login-user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { User } from '../Models/user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ForgotPasswordDto } from '../Models/forgot-password-dto';
import { ResetPasswordDto } from '../Models/reset-password-dto';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:57890';
  router: Router;
  constructor(private http: HttpClient) { }
  registerUser(user : User){
    const body: User = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Age: user.Age,
      Mobile: user.Mobile,
      Gender: user.Gender,
      Password: user.Password


    }
    return this.http.post(this.rootUrl + '/api/Users', body);
  }
  LoginUser(loginUser: LoginUser){
    const body: LoginUser={
      Email: loginUser.Email,
      Password: loginUser.Password
    }
    return this.http.post(this.rootUrl+'/api/Auth', body)
    .pipe(map(user => {
      if (user){
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

  isAuthenticated() {

    let user = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    console.log(user)
    if ('currentUser' in localStorage) {
        return true;
    }

    return false;
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  /* forgotPassword(){

  } */
  forgotPassword( forgetpassword: ForgotPasswordDto){
    const body:ForgotPasswordDto={
      Email:forgetpassword.Email
    }

    return this.http.post(this.rootUrl+'/api/ForgotPassword', body)



  }

   resetPassword ( body: ResetPasswordDto){

    return this.http.post(this.rootUrl+'/api/ResetPassword', body)


  }
  updateProfile (body: any) {
    // console.log();

    return this.http.put(this.rootUrl+'/api/Users/'+body.ID, body)
  }
}
