import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {AppState} from '../index';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        auth: ['token', 'signed'],
      }
    ],
    rehydrate: true
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppState, any>> = [];

if (typeof window !== "undefined") {
  metaReducers.push(localStorageSyncReducer);
}
