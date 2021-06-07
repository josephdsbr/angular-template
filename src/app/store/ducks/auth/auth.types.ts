export default interface AuthState {
  signed: boolean;
  token: string;
}

export enum AuthActionsType {
  AUTH_SIGN_IN_REQUEST = '@auth/SIGN IN REQUEST',
  AUTH_SIGN_IN_SUCCESS = '@auth/SIGN IN SUCCESS',
  AUTH_SIGN_IN_FAILURE = '@auth/SIGN IN FAILURE',
  AUTH_SIGN_OUT = '@auth/SIGN OUT',
}

export interface AuthSignInRequestModel {
  username: string;
  password: string;
}

export interface AuthSignInSuccessModel {
  token: string;
  name: string;
}
