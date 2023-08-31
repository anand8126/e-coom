import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SellerloginService } from './service/sellerlogin.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private router: Router, private service:SellerloginService) {
 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  
    if(localStorage.getItem('login')) {
      return true;
     }
  
 
    return this.service.isellerLogin;
    


  }
}
