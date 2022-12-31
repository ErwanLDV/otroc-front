export const PAGE_RELOAD = 'PAGE_RELOAD';
export const CHANGE_REDIRECTION = 'CHANGE_REDIRECTION';
export const MESSAGE_POPUP = 'MESSAGE_POPUP';

export function actionPageReload() {
  return {
    type: PAGE_RELOAD,
  };
}

export function actionChangeRedirection(bool, path = '/') {
  return {
    type: CHANGE_REDIRECTION,
    payload: {
      bool,
      path,
    },
  };
}

export function actionMessagePopUp(message) {
  return {
    type: MESSAGE_POPUP,
    payload: message,
  };
}
