export const AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const AUTH_SIGN_FAILURE = '@auth/SIGN_FAILURE';
export const AUTH_SIGN_OUT = '@auth/SIGN_SIGN_OUT';

export function signInRequest({ email, password }) {
  return {
    type: AUTH_SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess({ token, user }) {
  return {
    type: AUTH_SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: AUTH_SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: AUTH_SIGN_OUT,
  };
}
