import { SAVE_ALL_CATEGORIES } from '../actions/categories';

export const initialState = {
  categoriesArray: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_CATEGORIES:
      return {
        ...state,
        categoriesArray: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
