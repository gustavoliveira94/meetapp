export const PROFILE_UPDATE_REQUEST = '@profile/UPDATE_REQUEST';
export const PROFILE_UPDATE_SUCCESS = '@profile/UPDATE_SUCCESS';

export function updateRequest(profile) {
  return {
    type: PROFILE_UPDATE_REQUEST,
    payload: profile,
  };
}

export function updateSuccess(profile) {
  return {
    type: PROFILE_UPDATE_SUCCESS,
    payload: profile,
  };
}
