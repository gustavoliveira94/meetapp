import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { AUTH_SIGN_IN_REQUEST, signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, '/sessions', { email, password });

    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    yield put(signInSuccess(data));
  } catch (e) {
    Alert.alert('Um erro ocorreu enquanto o login era feito. Tente novamente.');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AUTH_SIGN_IN_REQUEST, signIn),
]);
