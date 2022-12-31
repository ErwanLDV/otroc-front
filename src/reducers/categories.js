import {
  SAVE_ALL_CATEGORIES,
  CATEGORIES_LOADED,
  NAVBAR_RERENDER,
  SAVE_CATEGORY_RESULTS,
  SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS,
  SAVE_TOP_CATEGORIES,
} from '../actions/categories';

export const initialState = {
  categoriesArray: [],
  categoriesLoaded: false,
  navBarRerender: true,
  categoryResults: [],
  MainCategoriesListCards: [],
  topCategories: [],
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

    case SAVE_TOP_CATEGORIES:
      return {
        ...state,
        topCategories: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
