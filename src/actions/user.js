export const CHANGE_CUSTOM_INPUT = 'CHANGE_CUSTOM_INPUT';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const LOGOUT = 'LOGOUT';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const GET_USER_PROFIL = 'GET_USER_PROFIL';

export function actionChangeCustomInput(newValue, inputName) {
  return {
    type: CHANGE_CUSTOM_INPUT,
    payload: {
      newValue,
      inputName,
    },
  };
}

export function actionCheckLogin() {
  return {
    type: CHECK_LOGIN,
  };
}

export function actionAuthentSuccess(token) {
  return {
    type: AUTHENT_SUCCESS,
    payload: {
      token,
    },
  };
}

export function actionAuthentError() {
  return {
    type: AUTHENT_ERROR,
  };
}

export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

export function actionUserIncscription() {
  return {
    type: USER_INSCRIPTION,
  };
}

export function actionGetUserProfil() {
  return {
    type: GET_USER_PROFIL,
  };
}
