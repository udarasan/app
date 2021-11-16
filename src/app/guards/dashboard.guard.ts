import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private _router : Router , private _loginService : LoginService) {
  }
  canActivate():boolean{
    //check login
    if (this._loginService.isLogin()){
      return true;
    }else {
      this._router.navigateByUrl('/login')
      return false;
    }

  }

}
