import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService implements CanActivate {

  constructor() { }
  canActivate(){
    if(sessionStorage.id)
      return true;
      
    return false;
  }
}
