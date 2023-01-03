export const CHANGE_CUSTOM_INPUT_USER = 'CHANGE_CUSTOM_INPUT_USER';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const AUTHENT_SUCCESS = 'AUTHENT_SUCCESS';
export const AUTHENT_ERROR = 'AUTHENT_ERROR';
export const LOGOUT = 'LOGOUT';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const GET_USER_PROFIL = 'GET_USER_PROFIL';
export const SAVE_USER_PROFIL = 'SAVE_USER_PROFIL';
export const SAVE_USER_PICTURE = 'SAVE_USER_PICTURE';
export const PUT_USER_PROFIL = 'PUT_USER_PROFIL';
export const POST_USER_PICTURE = 'POST_USER_PICTURE';
export const GET_USER_OFFERS = 'GET_USER_OFFERS';
export const SAVE_USER_OFFERS = 'SAVE_USER_OFFERS';
export const GET_USER_WISHES = 'GET_USER_WISHES';
export const SAVE_USER_WISHES = 'SAVE_USER_WISHES';
export const GET_USER_HISTORY = 'GET_USER_HISTORY';
export const SAVE_USER_HISTORY = 'SAVE_USER_HISTORY';
export const GET_OTHER_USER_PROFIL = 'GET_OTHER_USER_PROFIL';
export const SAVE_OTHER_USER_PROFIL = 'SAVE_OTHER_USER_PROFIL';
export const DELETE_USER = 'DELETE_USER';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

/**
 * Change the value of custom input field text controlled in state
 * @param {string} newValue input value
 * @param {string} inputName input name
 * @param {string} parentObject name of the parent object in the state
 * @returns {object} for user reducer
 */
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

/**
 * Action to check login from API
 * @returns {object}
 */
export function actionCheckLogin() {
  return {
    type: CHECK_LOGIN,
  };
}

/**
 * Action to save the active session and auhentication success
 * @param {object} activeSession Object with id, alias and token
 * @returns {object}
 */
export function actionAuthentSuccess(activeSession) {
  return {
    type: AUTHENT_SUCCESS,
    payload: activeSession,
  };
}

/**
 * Action to set an error message in the state for a failed authentication
 * @returns {object}
 */
export function actionAuthentError() {
  return {
    type: AUTHENT_ERROR,
  };
}

/**
 * Action to logout
 * @returns {object}
 */
export function actionLogout() {
  return {
    type: LOGOUT,
  };
}

/**
 * Action to add a user to the database
 * @returns {object}
 */
export function actionUserIncscription() {
  return {
    type: USER_INSCRIPTION,
  };
}

/**
 * Action to get the profil of the current user
 * @returns {object}
 */
export function actionGetUserProfil() {
  return {
    type: GET_USER_PROFIL,
  };
}

/**
 * Action to save the informations the current user profil in the state
 * @param {object} profil with the informations of user
 * @returns {object}
 */
export function actionSaveUserProfil(profil) {
  return {
    type: SAVE_USER_PROFIL,
    payload: profil,
  };
}

/**
 * Save the picture of a user in the state
 * @param {object} picture
 * @returns {object}
 */
export function actionSaveUserPicture(picture) {
  return {
    type: SAVE_USER_PICTURE,
    payload: picture,
  };
}

/**
 * Action to edit a user from API
 * @returns {object}
 */
export function actionPutUserProfil() {
  return {
    type: PUT_USER_PROFIL,
  };
}

/**
 * Action to save a new user picture in the database
 * @param {Object} newPicture
 * @returns {object}
 */
export function actionPostUserPicture(newPicture) {
  return {
    type: POST_USER_PICTURE,
    payload: newPicture,
  };
}

/**
 * Action to get the offers of a user from API
 * @returns {object}
 */
export function actionGetUserOffers() {
  return {
    type: GET_USER_OFFERS,
  };
}

/**
 * Actoin to save the offers of a user in the state
 * @param {array} arrayDataOffers array of the offers
 * @returns {object}
 */
export function actionSaveUserOffers(arrayDataOffers) {
  return {
    type: SAVE_USER_OFFERS,
    payload: arrayDataOffers,
  };
}

/**
 * Action to get the wishes of a user from API
 * @returns {object}
 */
export function actionGetUserWishes() {
  return {
    type: GET_USER_WISHES,
  };
}

/**
 * Actoin to save the wishes of a user in the state
 * @param {array} arrayDataOffers array of the wishes
 * @returns {object}
 */
export function actionSaveUserWishes(arrayDataWishes) {
  return {
    type: SAVE_USER_WISHES,
    payload: arrayDataWishes,
  };
}

/**
 * Action to get the user history from API
 * @returns {object}
 */
export function actionGetUserHistory() {
  return {
    type: GET_USER_HISTORY,
  };
}

/**
 * Action to get an other user profil from API
 * @param {string} id of the user
 * @returns {object}
 */
export function actionGetOtherUserProfil(id) {
  return {
    type: GET_OTHER_USER_PROFIL,
    payload: id,
  };
}

/**
 * Action to save the profil of an other user in the state
 * @param {array} arrayDataUserProfil
 * @returns {object}
 */
export function actionSaveOtherUserProfil(arrayDataUserProfil) {
  return {
    type: SAVE_OTHER_USER_PROFIL,
    payload: arrayDataUserProfil,
  };
}

/**
 * Action to delete a user from API
 * @returns {object}
 */
export function actionDeleteUser() {
  return {
    type: DELETE_USER,
  };
}

/**
 * Action to save the user history in the state
 * @param {arry} listAnnoucementArray
 * @returns {object}
 */
export function actionSaveUserHistory(listAnnoucementArray) {
  return {
    type: SAVE_USER_HISTORY,
    payload: listAnnoucementArray,
  };
}

/**
 * Action to change a user password
* @param {string} currentPassword
 * @param {string} newPassword
 * @returns {object}
 */
export function actionChangePassword(currentPassword, newPassword) {
  return {
    type: CHANGE_PASSWORD,
    payload: {
      currentPassword,
      newPassword,
    },
  };
}
