import {
  AuthActionsType, AuthSignInRequestModel,
  AuthSignInSuccessModel,
} from './auth.types';

import { createAction, props } from '@ngrx/store';

export const AuthSignInRequest = createAction(
  AuthActionsType.AUTH_SIGN_IN_REQUEST,
  props<AuthSignInRequestModel>()
);

export const AuthSignInSuccess = createAction(
  AuthActionsType.AUTH_SIGN_IN_SUCCESS,
  props<AuthSignInSuccessModel>()
);

export const AuthSignInFailure = createAction(
  AuthActionsType.AUTH_SIGN_IN_FAILURE,
  props<Error>()
);

export const AuthSignOut = createAction(
  AuthActionsType.AUTH_SIGN_OUT
);
