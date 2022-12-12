import { SAVE_ALL_CATEGORIES, CATEGORIES_LOADED } from '../actions/categories';

export const initialState = {
  categoriesArray: [],
  categoriesLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_CATEGORIES:
      return {
        ...state,
        categoriesArray: action.payload,
      };

    case CATEGORIES_LOADED:
      return {
        ...state,
        categoriesLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
