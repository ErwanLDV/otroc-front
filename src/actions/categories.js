export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const SAVE_ALL_CATEGORIES = 'SAVE_ALL_CATEGORIES';

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
