import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private accessService: AccessService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const requiredAction = route.data['requiredAction'];
      const moduleName = route.data['moduleName'];

      if(!requiredAction || !moduleName){
        return of(true)
      }
        if (this.accessService.hasAccess(moduleName, requiredAction)) {
            return true;
        } else {
            this.router.navigate(['/forbidden']);
            return false;
        }
  }
}