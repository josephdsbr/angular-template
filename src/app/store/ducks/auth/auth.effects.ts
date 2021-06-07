import * as AuthActions from './auth.actions';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';

import {of} from 'rxjs';
import {Router} from '@angular/router';
import {NotifierService} from "../../../services/notifier/notifier.service";
import {AuthService} from "../../../services/auth/auth.service";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private notifier: NotifierService
  ) {}

  signInRequest$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AuthSignInRequest),
    switchMap((payload) =>
      this.authService.signIn(payload).pipe(
        map((user) => AuthActions.AuthSignInSuccess(user)),
        catchError((error) => of(AuthActions.AuthSignInFailure(error)))
      )
    )
  ));

  signInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AuthSignInSuccess),
    map(() => this.router.navigate(['/home']))
  ), { dispatch: false });

  signInFailure$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AuthSignInFailure),
    map(({ message }) => this.notifier.showError(message))
  ), { dispatch: false });

  signOut$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.AuthSignOut),
    map(() => {
      return this.router.navigate(['/']);
    })
  ), { dispatch: false });
}
