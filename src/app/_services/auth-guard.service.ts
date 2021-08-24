import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorageService} from "./token-storage.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private jwtHelper = new JwtHelperService();

  constructor(private tokenStorageService: TokenStorageService, public router: Router) {
  }

  private isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    return !this.jwtHelper.isTokenExpired(token!);
  }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
