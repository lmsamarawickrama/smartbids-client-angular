import {Injectable} from '@angular/core';
import {TokenStorageService} from "./token-storage.service";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public tokenStorageService: TokenStorageService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const roles = this.tokenStorageService.getUser().roles;

    if (!roles.includes(expectedRole)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

