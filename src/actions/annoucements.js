export const CHANGE_CUSTOM_INPUT_ANNOUCEMENT = 'CHANGE_CUSTOM_INPUT_ANNOUCEMENT';
export const CHANGE_TEXT_AREA_ANNOUCEMENT = 'CHANGE_TEXT_AREA_ANNOUCEMENT';
export const CHANGE_SELECT_CATEGORIES_ANNOUCEMENT = 'CHANGE_SELECT_CATEGORIES_ANNOUCEMENT';
// OFFERS ----------------------------------------------------------------
export const GET_OFFERS_ANNOUCEMENTS = 'GET_OFFERS_ANNOUCEMENTS';
export const SAVE_OFFERS_ANNOUCEMENTS = 'SAVE_OFFERS_ANNOUCEMENTS';
export const GET_ONE_OFFER_ANNOUCEMENT = 'GET_ONE_OFFER_ANNOUCEMENT';
export const SAVE_ONE_OFFER_ANNOUCEMENT = 'SAVE_ONE_OFFER_ANNOUCEMENT';
export const ADD_NEW_OFFER_ANNOUCEMENT = 'ADD_NEW_OFFER_ANNOUCEMENT';

// WISHES ----------------------------------------------------------------
export const GET_WISHES_ANNOUCEMENTS = 'GET_WISHES_ANNOUCEMENTS';
export const SAVE_WISHES_ANNOUCEMENTS = 'SAVE_WISHES_ANNOUCEMENTS';
export const GET_ONE_WISH_ANNOUCEMENT = 'GET_ONE_WISH_ANNOUCEMENT';
export const SAVE_ONE_WISH_ANNOUCEMENT = 'SAVE_ONE_WISH_ANNOUCEMENT';
export const ADD_NEW_WISH_ANNOUCEMENT = 'ADD_NEW_WISH_ANNOUCEMENT';
export const GET_EDIT_WISH_ANNOUCEMENT = 'GET_EDIT_WISH_ANNOUCEMENT';
export const SAVE_EDIT_WISH_ANNOUCEMENT = 'SAVE_EDIT_WISH_ANNOUCEMENT';
export const UPDATE_WISH_ANNOUCEMENT = 'UPDATE_WISH_ANNOUCEMENT';

export function actionChangeCustomInputAnnoucement(newValue, inputName, parentObject = null) {
  return {
    type: CHANGE_CUSTOM_INPUT_ANNOUCEMENT,
    payload: {
      newValue,
      inputName,
      parentObject,
    },
  };
}

export function actionChangeTextAreaAnnoucement(newValue) {
  return {
    type: CHANGE_TEXT_AREA_ANNOUCEMENT,
    payload: newValue,
  };
}

export function actionChangeSelectCategoriesAnnoucement(newValue) {
  return {
    type: CHANGE_SELECT_CATEGORIES_ANNOUCEMENT,
    payload: newValue,
  };
}

// OFFERS ----------------------------------------------------------------

export function actionGetOffersAnnoucements() {
  return {
    type: GET_OFFERS_ANNOUCEMENTS,
  };
}

export function actionSaveOffersAnnoucements(offersArray) {
  return {
    type: SAVE_OFFERS_ANNOUCEMENTS,
    payload: offersArray,
  };
}

export function actionGetOneOfferAnnoucement(id) {
  return {
    type: GET_ONE_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

export function actionSaveOneOfferAnnoucement(offer) {
  return {
    type: SAVE_ONE_OFFER_ANNOUCEMENT,
    payload: offer,
  };
}

export function actionAddNewOfferAnnoucement() {
  return {
    type: ADD_NEW_OFFER_ANNOUCEMENT,
  };
}

// WISHES ----------------------------------------------------------------

export function actionGetWishesAnnoucements() {
  return {
    type: GET_WISHES_ANNOUCEMENTS,
  };
}

export function actionSaveWishesAnnoucements(wishesArray) {
  return {
    type: SAVE_WISHES_ANNOUCEMENTS,
    payload: wishesArray,
  };
}

export function actionGetOneWishAnnoucement(id) {
  return {
    type: GET_ONE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

export function actionSaveOneWishAnnoucement(wish) {
  return {
    type: SAVE_ONE_WISH_ANNOUCEMENT,
    payload: wish,
  };
}

export function actionAddNewWishAnnoucement() {
  return {
    type: ADD_NEW_WISH_ANNOUCEMENT,
  };
}

export function actionGetEditWishAnnoucement(id) {
  return {
    type: GET_EDIT_WISH_ANNOUCEMENT,
    payload: id,
  };
}

export function actionSaveEditWishAnnoucement(wish) {
  return {
    type: SAVE_EDIT_WISH_ANNOUCEMENT,
    payload: wish,
  };
}

export function actionUdateWishAnnoucement() {
  return {
    type: UPDATE_WISH_ANNOUCEMENT,
  };
}
