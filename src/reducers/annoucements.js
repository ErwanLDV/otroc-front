import { SAVE_OFFERS_ANNOUCEMENTS, SAVE_WISHES_ANNOUCEMENTS } from '../actions/annoucements';

export const initialState = {
  annoucementsArray: [],
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

    default:
      return state;
  }
};

export default reducer;
