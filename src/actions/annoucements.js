export const CHANGE_CUSTOM_INPUT_ANNOUCEMENT = 'CHANGE_CUSTOM_INPUT_ANNOUCEMENT';
export const CHANGE_TEXT_AREA_ANNOUCEMENT = 'CHANGE_TEXT_AREA_ANNOUCEMENT';
export const CHANGE_SELECT_CATEGORIES_ANNOUCEMENT = 'CHANGE_SELECT_CATEGORIES_ANNOUCEMENT';

// Mode Edit -------------------------------------------------------------
export const ENABLE_MODE_EDIT = 'ENABLE_MODE_EDIT';
export const DISABLE_MODE_EDIT = 'DISABLE_MODE_EDIT';

// Function cleanup ------------------------------------------------------
export const CLEANUP_ANNOUCEMENT_PAGE = 'CLEANUP_ANNOUCEMENT_PAGE';

// OFFERS ----------------------------------------------------------------
export const GET_OFFERS_ANNOUCEMENTS = 'GET_OFFERS_ANNOUCEMENTS';
export const SAVE_OFFERS_ANNOUCEMENTS = 'SAVE_OFFERS_ANNOUCEMENTS';
export const GET_ONE_OFFER_ANNOUCEMENT = 'GET_ONE_OFFER_ANNOUCEMENT';
export const SAVE_ONE_OFFER_ANNOUCEMENT = 'SAVE_ONE_OFFER_ANNOUCEMENT';
export const ADD_NEW_OFFER_ANNOUCEMENT = 'ADD_NEW_OFFER_ANNOUCEMENT';
export const GET_EDIT_OFFER_ANNOUCEMENT = 'GET_EDIT_OFFER_ANNOUCEMENT';
export const SAVE_EDIT_OFFER_ANNOUCEMENT = 'SAVE_EDIT_OFFER_ANNOUCEMENT';
export const UPDATE_OFFER_ANNOUCEMENT = 'UPDATE_OFFER_ANNOUCEMENT';
export const REPORTED_OFFER_ANNOUCEMENT = 'REPORTED_OFFER_ANNOUCEMENT';
export const DELETE_OFFER_ANNOUCEMENT = 'DELETE_OFFER_ANNOUCEMENT';
export const TOGGLE_ACTIVE_OFFER_ANNOUCEMENT = 'TOGGLE_ACTIVE_OFFER_ANNOUCEMENT';

// WISHES ----------------------------------------------------------------
export const GET_WISHES_ANNOUCEMENTS = 'GET_WISHES_ANNOUCEMENTS';
export const SAVE_WISHES_ANNOUCEMENTS = 'SAVE_WISHES_ANNOUCEMENTS';
export const GET_ONE_WISH_ANNOUCEMENT = 'GET_ONE_WISH_ANNOUCEMENT';
export const SAVE_ONE_WISH_ANNOUCEMENT = 'SAVE_ONE_WISH_ANNOUCEMENT';
export const ADD_NEW_WISH_ANNOUCEMENT = 'ADD_NEW_WISH_ANNOUCEMENT';
export const GET_EDIT_WISH_ANNOUCEMENT = 'GET_EDIT_WISH_ANNOUCEMENT';
export const SAVE_EDIT_WISH_ANNOUCEMENT = 'SAVE_EDIT_WISH_ANNOUCEMENT';
export const UPDATE_WISH_ANNOUCEMENT = 'UPDATE_WISH_ANNOUCEMENT';
export const REPORTED_WISH_ANNOUCEMENT = 'REPORTED_OFFER_ANNOUCEMENT';
export const DELETE_WISH_ANNOUCEMENT = 'DELETE_WISH_ANNOUCEMENT';
export const TOGGLE_ACTIVE_WISH_ANNOUCEMENT = 'TOGGLE_ACTIVE_WISH_ANNOUCEMENT';

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

// Mode Edit -------------------------------------------------------------

export function actionEnableModeEdit() {
  return {
    type: ENABLE_MODE_EDIT,
  };
}

export function actionDisableModeEdit() {
  return {
    type: DISABLE_MODE_EDIT,
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

export function actionGetEditOfferAnnoucement(id) {
  return {
    type: GET_EDIT_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

export function actionSaveEditOfferAnnoucement(offer) {
  return {
    type: SAVE_EDIT_OFFER_ANNOUCEMENT,
    payload: offer,
  };
}

export function actionUpdateOfferAnnoucement() {
  return {
    type: UPDATE_OFFER_ANNOUCEMENT,
  };
}

export function actionReportedOfferAnnoucement(id) {
  return {
    type: REPORTED_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

export function actionDeleteOfferAnnoucement(id) {
  return {
    type: DELETE_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

export function actionToggleActiveOfferAnnoucement(id) {
  return {
    type: TOGGLE_ACTIVE_OFFER_ANNOUCEMENT,
    payload: id,
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

export function actionUpdateWishAnnoucement() {
  return {
    type: UPDATE_WISH_ANNOUCEMENT,
  };
}

export function actionReportedWishAnnoucement(id) {
  return {
    type: REPORTED_WISH_ANNOUCEMENT,
    payload: id,
  };
}

export function actionDeleteWishAnnoucement(id) {
  return {
    type: DELETE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

export function actionToggleActiveWishAnnoucement(id) {
  return {
    type: TOGGLE_ACTIVE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

// Function cleanup ------------------------------------------------------

export function actionCleanupAnnoucementPage() {
  return {
    type: CLEANUP_ANNOUCEMENT_PAGE,
  };
}
