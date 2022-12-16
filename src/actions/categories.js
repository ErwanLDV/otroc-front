export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const NAVBAR_RERENDER = 'NAVBAR_RERENDER';
export const GET_CATEGORY_RESULTS = 'GET_CATEGORY_RESULTS';
export const GET_MAIN_CATEGORY_RESULTS = 'GET_MAIN_CATEGORY_RESULTS';
export const SAVE_CATEGORY_RESULTS = 'SAVE_CATEGORY_RESULTS';
export const SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS = 'SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS';

export function actionGetAllCategories() {
  return {
    type: GET_ALL_CATEGORIES,
  };
}

export function actionSaveAllCategories(categoriesArray) {
  return {
    type: SAVE_ALL_CATEGORIES,
    payload: categoriesArray,
  };
}

export function actionCategoriesLoaded(bool) {
  return {
    type: CATEGORIES_LOADED,
    payload: bool,
  };
}

export function actionNavbarRerender(bool) {
  return {
    type: NAVBAR_RERENDER,
    payload: bool,
  };
}

export function actionGetCategoryResults(id) {
  return {
    type: GET_CATEGORY_RESULTS,
    payload: id,
  };
}

export function actionGetMainCategoryResults(id) {
  return {
    type: GET_MAIN_CATEGORY_RESULTS,
    payload: id,
  };
}

export function actionSaveCategoryResults(categoriesArray) {
  return {
    type: SAVE_CATEGORY_RESULTS,
    payload: categoriesArray,
  };
}

export function actionSaveMainCategoriesResultForCards(categoriesArray) {
  return {
    type: SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS,
    payload: categoriesArray,
  };
}
