export const PAGE_RELOAD = 'PAGE_RELOAD';
export const CHANGE_REDIRECTION = 'CHANGE_REDIRECTION';
export const MESSAGE_POPUP = 'MESSAGE_POPUP';
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';

/**
 * Action to reload a page
 * @returns {object}
 */
export function actionPageReload() {
  return {
    type: PAGE_RELOAD,
  };
}

/**
 * Action to set boolean and string to change redirection
 * @param {boolean} bool
 * @param {string} path
 * @returns {object}
 */
export function actionChangeRedirection(bool, path = '/') {
  return {
    type: CHANGE_REDIRECTION,
    payload: {
      bool,
      path,
    },
  };
}

/**
 * Action to set a message for the pop up
 * @param {string} message
 * @returns {object}
 */
export function actionMessagePopUp(message) {
  return {
    type: MESSAGE_POPUP,
    payload: message,
  };
}

/**
 * Action to set isLoading in the state
 * @returns {object}
 */
export function actionChangeIsLoading() {
  return {
    type: CHANGE_IS_LOADING,
  };
}
