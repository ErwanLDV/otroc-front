export const MESSAGE_POPUP = 'MESSAGE_POPUP';

export function actionMessagePopUp(message) {
  return {
    type: MESSAGE_POPUP,
    payload: message,
  };
}
