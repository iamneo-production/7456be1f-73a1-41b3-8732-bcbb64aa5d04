import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationServiceService } from '../service/registration-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: RegistrationServiceService, private route: Router) { }

  canActivate(): boolean {

    if (this.service.loggedIn()) {
      return true
    } else {
      this.route.navigate(['/login'])
      return false
    }

  }
  
}
