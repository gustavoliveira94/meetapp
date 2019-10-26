import produce from 'immer';
import { MEETUP_LOAD } from './actions';
import { AUTH_SIGN_OUT } from '../auth/actions';

const INITIAL_STATE = {};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, () => {
    switch (action.type) {
      case MEETUP_LOAD:
        return action.payload.data.reduce(
          (acc, { id, ...rest }) => ({
            ...acc,
            [id]: rest,
          }),
          {}
        );
      case AUTH_SIGN_OUT:
        return {};
      default:
        return state;
    }
  });
}
