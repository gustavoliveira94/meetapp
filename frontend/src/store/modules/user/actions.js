export const USER_UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST';
export const USER_UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS';

export function updateProfileRequest(data) {
  return {
    type: USER_UPDATE_PROFILE_REQUEST,
    payload: data,
  };
}

export function updateProfileSuccess(data) {
  return {
    type: USER_UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
}
