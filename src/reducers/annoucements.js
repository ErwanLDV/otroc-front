import {
  SAVE_OFFERS_ANNOUCEMENTS,
  SAVE_ONE_OFFER_ANNOUCEMENT,
  SAVE_ONE_WISH_ANNOUCEMENT,
  SAVE_WISHES_ANNOUCEMENTS,
} from '../actions/annoucements';

export const initialState = {
  inputSearchBar: '',
  annoucementsArray: [],
  currentAnnoucement: {},
  addOrEditOffer: {},
  addOrEditWish: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_OFFERS_ANNOUCEMENTS:
      return {
        ...state,
        annoucementsArray: action.payload,
      };

    case SAVE_WISHES_ANNOUCEMENTS:
      return {
        ...state,
        annoucementsArray: action.payload,
      };

    case SAVE_ONE_OFFER_ANNOUCEMENT:
    case SAVE_ONE_WISH_ANNOUCEMENT:
      return {
        ...state,
        currentAnnoucement: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
