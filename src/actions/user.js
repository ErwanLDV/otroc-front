export const CHANGE_CUSTOM_INPUT_USER = 'CHANGE_CUSTOM_INPUT_USER';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const LOGOUT = 'LOGOUT';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const GET_USER_PROFIL = 'GET_USER_PROFIL';
export const SAVE_USER_PROFIL = 'SAVE_USER_PROFIL';
export const PUT_USER_PROFIL = 'PUT_USER_PROFIL';
export const GET_USER_OFFERS = 'GET_USER_OFFERS';
export const SAVE_USER_OFFERS = 'SAVE_USER_OFFERS';
export const GET_USER_WISHES = 'GET_USER_WISHES';
export const SAVE_USER_WISHES = 'SAVE_USER_WISHES';
export const GET_USER_HISTORY = 'GET_USER_HISTORY';

export function actionChangeCustomInputUser(newValue, inputName, parentObject = null) {
  return {
    type: CHANGE_CUSTOM_INPUT_USER,
    payload: {
      newValue,
      inputName,
      parentObject,
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

export function actionSaveUserProfil(profil) {
  return {
    type: SAVE_USER_PROFIL,
    payload: profil,
  };
}

export function actionPutUserProfil() {
  return {
    type: PUT_USER_PROFIL,
  };
}

export function actionGetUserOffers() {
  return {
    type: GET_USER_OFFERS,
  };
}

export function actionSaveUserOffers(arrayDataOffers) {
  return {
    type: SAVE_USER_OFFERS,
    payload: arrayDataOffers,
  };
}

export function actionGetUserWishes() {
  return {
    type: GET_USER_WISHES,
  };
}

export function actionSaveUserWishes(arrayDataWishes) {
  return {
    type: SAVE_USER_WISHES,
    payload: arrayDataWishes,
  };
}

export function actionGetUserHistory() {
  return {
    type: GET_USER_HISTORY,
  };
}
