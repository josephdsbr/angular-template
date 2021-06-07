import produce from 'immer';
import AuthState from './auth.types';
import { createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authInitialState: AuthState = {
  signed: false,
  token: ''
};

export const AuthReducer = createReducer(
  authInitialState,
  on(authActions.AuthSignInSuccess, (state, user) =>
    produce(state, (draft) => {
      draft.token = user.token;
      draft.signed = !!user.token;
    })
  ),
  on(authActions.AuthSignOut, () => authInitialState)
);
