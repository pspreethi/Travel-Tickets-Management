import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(): boolean {
    if ("loggedUser" in localStorage) {
        return true;
    }
    else{
      alert("Can't access the page, if you are an admin please LOGIN!")
      this.router.navigate(['/adminlogin']);
      return false;
    }

    }

}
