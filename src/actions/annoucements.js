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
export const SAVE_OFFER_PICTURE = 'SAVE_OFFER_PICTURE';
export const REPORTED_OFFER_ANNOUCEMENT = 'REPORTED_OFFER_ANNOUCEMENT';
export const DELETE_OFFER_ANNOUCEMENT = 'DELETE_OFFER_ANNOUCEMENT';
export const TOGGLE_ACTIVE_OFFER_ANNOUCEMENT = 'TOGGLE_ACTIVE_OFFER_ANNOUCEMENT';
export const TOGGLE_LEND_OFFER_ANNOUCEMENT = 'TOGGLE_LEND_OFFER_ANNOUCEMENT';

// WISHES ----------------------------------------------------------------
export const GET_WISHES_ANNOUCEMENTS = 'GET_WISHES_ANNOUCEMENTS';
export const SAVE_WISHES_ANNOUCEMENTS = 'SAVE_WISHES_ANNOUCEMENTS';
export const GET_ONE_WISH_ANNOUCEMENT = 'GET_ONE_WISH_ANNOUCEMENT';
export const SAVE_ONE_WISH_ANNOUCEMENT = 'SAVE_ONE_WISH_ANNOUCEMENT';
export const ADD_NEW_WISH_ANNOUCEMENT = 'ADD_NEW_WISH_ANNOUCEMENT';
export const GET_EDIT_WISH_ANNOUCEMENT = 'GET_EDIT_WISH_ANNOUCEMENT';
export const SAVE_EDIT_WISH_ANNOUCEMENT = 'SAVE_EDIT_WISH_ANNOUCEMENT';
export const UPDATE_WISH_ANNOUCEMENT = 'UPDATE_WISH_ANNOUCEMENT';
export const SAVE_WISH_PICTURE = 'SAVE_WISH_PICTURE';
export const REPORTED_WISH_ANNOUCEMENT = 'REPORTED_WISH_ANNOUCEMENT';
export const DELETE_WISH_ANNOUCEMENT = 'DELETE_WISH_ANNOUCEMENT';
export const TOGGLE_ACTIVE_WISH_ANNOUCEMENT = 'TOGGLE_ACTIVE_WISH_ANNOUCEMENT';

/**
 * Change the value of custom input field text controlled in state
 * @param {string} newValue input value
 * @param {string} inputName input name
 * @param {string} parentObject name of the parent object in the state
 * @returns {object} for annoucements reducer
 */
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
/**
 * Change the value of textarea field controlled of an annoucement in state
 * @param {string} newValue textarea value
 * @returns {object} for annoucements reducer
 */
export function actionChangeTextAreaAnnoucement(newValue) {
  return {
    type: CHANGE_TEXT_AREA_ANNOUCEMENT,
    payload: newValue,
  };
}

/**
 * Change the value of a category with custom select controlled of an annoucement in state
 * @param {string} newValue of the category
 * @returns {object} for annoucements reducer
 */
export function actionChangeSelectCategoriesAnnoucement(newValue) {
  return {
    type: CHANGE_SELECT_CATEGORIES_ANNOUCEMENT,
    payload: newValue,
  };
}

// Mode Edit -------------------------------------------------------------

/**
 * Enable the Edit mode for an annoucement
 * @returns {object}
 */
export function actionEnableModeEdit() {
  return {
    type: ENABLE_MODE_EDIT,
  };
}

/**
 * Disable the Edit mode for an annoucement
 * @returns {object}
 */
export function actionDisableModeEdit() {
  return {
    type: DISABLE_MODE_EDIT,
  };
}

// OFFERS ----------------------------------------------------------------

/**
 * Action to get offers annoucements from the API
 * @returns {object}
 */
export function actionGetOffersAnnoucements() {
  return {
    type: GET_OFFERS_ANNOUCEMENTS,
  };
}

/**
 * Action to save the offers annoucements in the state
 * @param {Array} offersArray an arrays with the offers annoucements
 * @returns {object}
 */
export function actionSaveOffersAnnoucements(offersArray) {
  return {
    type: SAVE_OFFERS_ANNOUCEMENTS,
    payload: offersArray,
  };
}

/**
 * Action to get one specific offer
 * @param {string} id of the offer
 * @returns {object}
 */
export function actionGetOneOfferAnnoucement(id) {
  return {
    type: GET_ONE_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to save one offer in the state
 * @param {object} offer an object with all the properties of an specific offer
 * @returns {object}
 */
export function actionSaveOneOfferAnnoucement(offer) {
  return {
    type: SAVE_ONE_OFFER_ANNOUCEMENT,
    payload: offer,
  };
}

/**
 * Action to add a new offer annoucement
 * @returns {object}
 */
export function actionAddNewOfferAnnoucement() {
  return {
    type: ADD_NEW_OFFER_ANNOUCEMENT,
  };
}

/**
 * Action to get a specific offer to edit
 * @param {string} id of the offer to edit
 * @returns {object}
 */
export function actionGetEditOfferAnnoucement(id) {
  return {
    type: GET_EDIT_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to save one offer in the state for edit
 * @param {Object} offer an object with all the properties of an specific offer
 * @returns {object}
 */
export function actionSaveEditOfferAnnoucement(offer) {
  return {
    type: SAVE_EDIT_OFFER_ANNOUCEMENT,
    payload: offer,
  };
}

/**
 * Action to update an offer in the database from API
 * @returns {object}
 */
export function actionUpdateOfferAnnoucement() {
  return {
    type: UPDATE_OFFER_ANNOUCEMENT,
  };
}

/**
 * Action to save an uploaded picture in the state for a new offer annoucement
 * @param {object} picture an object of the uploaded picture
 * @returns {object}
 */
export function actionSaveOfferPicture(picture) {
  return {
    type: SAVE_OFFER_PICTURE,
    payload: picture,
  };
}

/**
 * Action to repord an offer annoucement from API
 * @param {string} id of the offer
 * @returns {object}
 */
export function actionReportedOfferAnnoucement(id) {
  return {
    type: REPORTED_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to delete the offer annoucement from API
 * @param {string} id of the offer
 * @returns {object}
 */
export function actionDeleteOfferAnnoucement(id) {
  return {
    type: DELETE_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action toggle to active or disable an offer annoucement
 * @param {string} id of the offer
 * @returns {object}
 */
export function actionToggleActiveOfferAnnoucement(id) {
  return {
    type: TOGGLE_ACTIVE_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action toggle to lend an offer annoucement
 * @param {string} id of the offer
 * @returns {object}
 */
export function actionToggleLendOfferAnnoucement(id) {
  return {
    type: TOGGLE_LEND_OFFER_ANNOUCEMENT,
    payload: id,
  };
}

// WISHES ----------------------------------------------------------------

/**
 * Action to get wishes annoucements from the API
 * @returns {object}
 */
export function actionGetWishesAnnoucements() {
  return {
    type: GET_WISHES_ANNOUCEMENTS,
  };
}

/**
 * Action to save the wishes annoucements in the state
 * @param {Array} wishesArray an arrays with the wishes annoucements
 * @returns {object}
 */
export function actionSaveWishesAnnoucements(wishesArray) {
  return {
    type: SAVE_WISHES_ANNOUCEMENTS,
    payload: wishesArray,
  };
}

/**
 * Action to get one specific wish
 * @param {string} id of the wish
 * @returns {object}
 */
export function actionGetOneWishAnnoucement(id) {
  return {
    type: GET_ONE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to save one wish in the state
 * @param {object} wish an object with all the properties of an specific wish
 * @returns {object}
 */
export function actionSaveOneWishAnnoucement(wish) {
  return {
    type: SAVE_ONE_WISH_ANNOUCEMENT,
    payload: wish,
  };
}

/**
 * Action to add a new wish annoucement
 * @returns {object}
 */
export function actionAddNewWishAnnoucement() {
  return {
    type: ADD_NEW_WISH_ANNOUCEMENT,
  };
}

/**
 * Action to get a specific wish to edit
 * @param {string} id of the wish to edit
 * @returns {object}
 */
export function actionGetEditWishAnnoucement(id) {
  return {
    type: GET_EDIT_WISH_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to save one wish in the state for edit
 * @param {Object} wish an object with all the properties of an specific wish
 * @returns {object}
 */
export function actionSaveEditWishAnnoucement(wish) {
  return {
    type: SAVE_EDIT_WISH_ANNOUCEMENT,
    payload: wish,
  };
}

/**
 * Action to update an wish in the database from API
 * @returns {object}
 */
export function actionUpdateWishAnnoucement() {
  return {
    type: UPDATE_WISH_ANNOUCEMENT,
  };
}

/**
 * Action to save an uploaded picture in the state for a new wish annoucement
 * @param {object} picture an object of the uploaded picture
 * @returns {object}
 */
export function actionSaveWishPicture(picture) {
  return {
    type: SAVE_WISH_PICTURE,
    payload: picture,
  };
}

/**
 * Action to repord an wish annoucement from API
 * @param {string} id of the wish
 * @returns {object}
 */
export function actionReportedWishAnnoucement(id) {
  return {
    type: REPORTED_WISH_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action to delete the wish annoucement from API
 * @param {string} id of the wish
 * @returns {object}
 */
export function actionDeleteWishAnnoucement(id) {
  return {
    type: DELETE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

/**
 * Action toggle to active or disable an wish annoucement
 * @param {string} id of the wish
 * @returns {object}
 */
export function actionToggleActiveWishAnnoucement(id) {
  return {
    type: TOGGLE_ACTIVE_WISH_ANNOUCEMENT,
    payload: id,
  };
}

// Function cleanup ------------------------------------------------------

/**
 * Action to clean up an annoucementPage in the state
 * @returns {object}
 */
export function actionCleanupAnnoucementPage() {
  return {
    type: CLEANUP_ANNOUCEMENT_PAGE,
  };
}
