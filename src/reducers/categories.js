import { SAVE_ALL_CATEGORIES, CATEGORIES_LOADED, NAVBAR_RERENDER, SAVE_CATEGORY_RESULTS, SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS, CATEGORY_RESULT_LOADED } from '../actions/categories';

export const initialState = {
  categoriesArray: [],
  categoriesLoaded: false,
  navBarRerender: true,
  categoryResults: [],
  MainCategoriesListCards: [],
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

    case NAVBAR_RERENDER:
      return {
        ...state,
        navBarRerender: action.payload,
      };

    case SAVE_CATEGORY_RESULTS:
      return {
        ...state,
        categoryResults: action.payload,
      };

    case SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS:
      return {
        ...state,
        MainCategoriesListCards: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
