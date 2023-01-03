export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const NAVBAR_RERENDER = 'NAVBAR_RERENDER';
export const GET_CATEGORY_RESULTS = 'GET_CATEGORY_RESULTS';
export const GET_MAIN_CATEGORY_RESULTS = 'GET_MAIN_CATEGORY_RESULTS';
export const SAVE_CATEGORY_RESULTS = 'SAVE_CATEGORY_RESULTS';
export const SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS = 'SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS';
export const GET_TOP_CATEGORIES = 'GET_TOP_CATEGORIES';
export const SAVE_TOP_CATEGORIES = 'SAVE_TOP_CATEGORIES';

/**
 * Action to get all categories from API
 * @returns {object}
 */
export function actionGetAllCategories() {
  return {
    type: GET_ALL_CATEGORIES,
  };
}

/**
 * Action to save the array of the categories in the state
 * @param {Array} categoriesArray array of the categories
 * @returns {object}
 */
export function actionSaveAllCategories(categoriesArray) {
  return {
    type: SAVE_ALL_CATEGORIES,
    payload: categoriesArray,
  };
}

/**
 * Action to set the boolean to know if the categories are loaded
 * @param {boolean} bool
 * @returns {object}
 */
export function actionCategoriesLoaded(bool) {
  return {
    type: CATEGORIES_LOADED,
    payload: bool,
  };
}

/**
 * Action to set the boolean to rerender the navbar
 * @param {boolean} bool
 * @returns {object}
 */
export function actionNavbarRerender(bool) {
  return {
    type: NAVBAR_RERENDER,
    payload: bool,
  };
}

/**
 * Action to get the annoucements of one category
 * @param {string} id of the category
 * @returns {object}
 */
export function actionGetCategoryResults(id) {
  return {
    type: GET_CATEGORY_RESULTS,
    payload: id,
  };
}

/**
 * Action to the categories of a main category
 * @param {string} id of the main category
 * @returns {object}
 */
export function actionGetMainCategoryResults(id) {
  return {
    type: GET_MAIN_CATEGORY_RESULTS,
    payload: id,
  };
}

/**
 * Action to save the annoucements of one category in the state
 * @param {Array} categoriesArray array of the annoucements
 * @returns {object}
 */
export function actionSaveCategoryResults(categoriesArray) {
  return {
    type: SAVE_CATEGORY_RESULTS,
    payload: categoriesArray,
  };
}

/**
 * Action to save the categories of one main category in the state
 * @param {Array} categoriesArray array of the categories
 * @returns {object}
 */
export function actionSaveMainCategoriesResultForCards(categoriesArray) {
  return {
    type: SAVE_MAIN_CATEGORIES_RESULT_FOR_CARDS,
    payload: categoriesArray,
  };
}

/**
 * Action to get the top categories from API
 * @returns {object}
 */
export function actionGetTopCategories() {
  return {
    type: GET_TOP_CATEGORIES,
  };
}

/**
 * Action to save the top categories in the state
 * @param {Array} topCategoriesArray array of the top categories
 * @returns {object}
 */
export function actionSaveTopCategories(topCategoriesArray) {
  return {
    type: SAVE_TOP_CATEGORIES,
    payload: topCategoriesArray,
  };
}
