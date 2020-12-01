// @flow
import { types as t } from 'mobx-state-tree';

export const AuthStore = t
  .model('Auth', {
    isAuthorized: false,
  })
  .actions((store) => ({
    setAuthorizationStatus(status) {
      store.isAuthorized = status;
    },
  }));
