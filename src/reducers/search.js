import { CHANGE_INPUT_SEARCH_BAR, SAVE_SEARCH_OFFERS_OR_WISHES } from '../actions/search';

export const initialState = {
  inputSearchBar: '',
  searchType: 'offer',
  searchAnnoucements: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH_BAR:
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };
    case SAVE_SEARCH_OFFERS_OR_WISHES:
      return {
        ...state,
        searchAnnoucements: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
