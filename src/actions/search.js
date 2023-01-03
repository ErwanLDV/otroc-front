export const CHANGE_INPUT_SEARCH_BAR = 'CHANGE_INPUT_SEARCH_BAR';
export const POST_SEARCH_OFFERS = 'POST_SEARCH_OFFERS';
export const POST_SEARCH_WISHES = 'POST_SEARCH_WISHES';
export const SAVE_SEARCH_OFFERS_OR_WISHES = 'SAVE_SEARCH_OFFERS_OR_WISHES';
export const SAVE_TYPE_ANNOUCEMENTS_RESULTS = 'SAVE_TYPE_ANNOUCEMENTS_RESULTS';

/**
 * Change the value of custom input field text controlled in state
 * @param {string} newValue input value
 * @param {string} inputName input name
 * @returns {object} for search reducer
 */
export function actionChangeInputSearchBar(newValue, inputName) {
  return {
    type: CHANGE_INPUT_SEARCH_BAR,
    payload: {
      newValue,
      inputName,
    },
  };
}

// Offers ====================================================================================

/**
 * Action to get a resulst of an offer search from API
 * @param {string} stringToFind string to find in the database
 * @returns {object}
 */
export function actionPostSearchOffers(stringToFind) {
  return {
    type: POST_SEARCH_OFFERS,
    payload: stringToFind,
  };
}

// Wishes ====================================================================================

/**
 * Action to get a resulst of an wish search from API
 * @param {string} stringToFind string to find in the database
 * @returns {object}
 */
export function actionPostSearchWishes(stringToFind) {
  return {
    type: POST_SEARCH_WISHES,
    payload: stringToFind,
  };
}

// Offers/Wishes =============================================================================

/**
 * Action to save the result of search in the State
 * @param {Array} ArraySearchResult array of the annoucements
 * @returns {object}
 */
export function actionSaveSearchOffersOrWishes(ArraySearchResult) {
  return {
    type: SAVE_SEARCH_OFFERS_OR_WISHES,
    payload: ArraySearchResult,

  };
}

/**
 * Action to save which type is used to the searchbar in the state
 * @param {string} type (offer or wish)
 * @returns {object}
 */
export function actionSaveTypeAnnoucementsResults(type) {
  return {
    type: SAVE_TYPE_ANNOUCEMENTS_RESULTS,
    payload: type,

  };
}
