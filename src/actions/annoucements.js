// OFFERS ----------------------------------------------------------------
export const GET_OFFERS_ANNOUCEMENTS = 'GET_OFFERS_ANNOUCEMENTS';
export const SAVE_OFFERS_ANNOUCEMENTS = 'SAVE_OFFERS_ANNOUCEMENTS';

// WISHES ----------------------------------------------------------------
export const GET_WISHES_ANNOUCEMENTS = 'GET_WISHES_ANNOUCEMENTS';
export const SAVE_WISHES_ANNOUCEMENTS = 'SAVE_WISHES_ANNOUCEMENTS';

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

// WISHES ----------------------------------------------------------------

export function actionGetWishesAnnoucements() {
  return {
    type: GET_WISHES_ANNOUCEMENTS,
  };
}

export function actionSaveWishesAnnoucements(offersArray) {
  return {
    type: SAVE_WISHES_ANNOUCEMENTS,
    payload: offersArray,
  };
}
