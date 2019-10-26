import produce from 'immer';

import { PROFILE_UPDATE_SUCCESS } from './actions';
import { AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from '../auth/actions';

const INITIAL_STATE = {
  profile: {},
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case PROFILE_UPDATE_SUCCESS:
        draft.profile = action.payload;
        break;
      case AUTH_SIGN_IN_SUCCESS:
        draft.profile = action.payload.user;
        break;
      case AUTH_SIGN_OUT:
        draft.profile = {};
        break;
      default:
        break;
    }
  });
}
