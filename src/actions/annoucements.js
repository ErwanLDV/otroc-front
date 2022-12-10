// OFFERS ----------------------------------------------------------------
export const GET_OFFERS_ANNOUCEMENTS = 'GET_OFFERS_ANNOUCEMENTS';
export const SAVE_OFFERS_ANNOUCEMENTS = 'SAVE_OFFERS_ANNOUCEMENTS';
export const GET_ONE_OFFER_ANNOUCEMENT = 'GET_ONE_OFFER_ANNOUCEMENT';
export const SAVE_ONE_OFFER_ANNOUCEMENT = 'SAVE_ONE_OFFER_ANNOUCEMENT';

// WISHES ----------------------------------------------------------------
export const GET_WISHES_ANNOUCEMENTS = 'GET_WISHES_ANNOUCEMENTS';
export const SAVE_WISHES_ANNOUCEMENTS = 'SAVE_WISHES_ANNOUCEMENTS';
export const GET_ONE_WISH_ANNOUCEMENT = 'GET_ONE_WISH_ANNOUCEMENT';
export const SAVE_ONE_WISH_ANNOUCEMENT = 'SAVE_ONE_WISH_ANNOUCEMENT';

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
