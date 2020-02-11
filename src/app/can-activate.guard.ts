import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import {AuthenticationService} from 'services/authentication.service';
import {RouterService} from 'services/router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate{
constructor(private authenticationService: AuthenticationService, private routerService: RouterService){

}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable< boolean | UrlTree> | Promise< boolean | UrlTree> | boolean | UrlTree{
    let token= this.authenticationService.getToken();
    //***************API Code************************************************************************/
    //   let token= this.authenticationService.getToken();

    //   return this.authenticationService.isUserAuthenticated(token).then(data => {
        
    //     if(!data){
    //       this.routerService.tologin();
    //     }
    //     return data;
    //   }).catch(err=>{
    //     console.log(err);
    //     return false;
    //   })
    // }
  //***************API Code************************************************************************/
  return this.authenticationService.isUserAuthenticated(token).then(data=>{
    if(!data){
            this.routerService.tologin();
          }
          console.log(data);
  return data;
  });
  
}

}