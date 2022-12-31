export const CHANGE_INPUT_SEARCH_BAR = 'CHANGE_INPUT_SEARCH_BAR';
export const POST_SEARCH_OFFERS = 'POST_SEARCH_OFFERS';
export const POST_SEARCH_WISHES = 'POST_SEARCH_WISHES';
export const SAVE_SEARCH_OFFERS_OR_WISHES = 'SAVE_SEARCH_OFFERS_OR_WISHES';
export const SAVE_TYPE_ANNOUCEMENTS_RESULTS = 'SAVE_TYPE_ANNOUCEMENTS_RESULTS';

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
export function actionPostSearchOffers(stringToFind) {
  return {
    type: POST_SEARCH_OFFERS,
    payload: stringToFind,
  };
}

// Wishes ====================================================================================
export function actionPostSearchWishes(stringToFind) {
  return {
    type: POST_SEARCH_WISHES,
    payload: stringToFind,
  };
}

// Offers/Wishes =============================================================================
export function actionSaveSearchOffersOrWishes(ArraySearchResult) {
  return {
    type: SAVE_SEARCH_OFFERS_OR_WISHES,
    payload: ArraySearchResult,

  };
}

export function actionSaveTypeAnnoucementsResults(type) {
  return {
    type: SAVE_TYPE_ANNOUCEMENTS_RESULTS,
    payload: type,

  };
}
