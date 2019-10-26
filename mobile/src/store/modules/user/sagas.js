import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { PROFILE_UPDATE_REQUEST, updateSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const {
      fullname,
      username,
      email,
      oldPassword,
      password,
      confirmPassword,
    } = payload;
    const { data } = yield call(api.put, '/users', {
      fullname,
      username,
      email,
      oldPassword: oldPassword || undefined,
      password: password || undefined,
      confirmPassword: confirmPassword || undefined,
    });

    Alert.alert('Perfil atualizado com sucesso.');

    yield put(updateSuccess(data));
  } catch (e) {
    console.tron.log(e);

    Alert.alert(
      'Ocorreu um erro enquanto seu perfil era atualizado. Tente novamente.'
    );
  }
}

export default all([takeLatest(PROFILE_UPDATE_REQUEST, updateProfile)]);
