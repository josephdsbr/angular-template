import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {AppState} from "../../store";
import {selectAuthSigned} from "../../store/ducks/auth/auth.selector";

@Injectable({
  providedIn: 'root',
})
export class SignedGuardService implements CanActivate {
  private isSigned = false;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store
      .select(selectAuthSigned)
      .subscribe((signed) => (this.isSigned = signed));
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.isSigned) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
