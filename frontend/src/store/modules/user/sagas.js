import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { USER_UPDATE_PROFILE_REQUEST, updateProfileSuccess } from './actions';

import api from '../../../services/api';

export function* updateProfile({ payload }) {
  try {
    const { fullname, username, email, ...rest } = payload;

    const profile = Object.assign(
      { fullname, username, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, '/users', profile);

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso.');
  } catch (e) {
    toast.error(
      'Um erro ocorreu enquanto suas informações de perfil eram salvas'
    );
  }
}

export default all([takeLatest(USER_UPDATE_PROFILE_REQUEST, updateProfile)]);
