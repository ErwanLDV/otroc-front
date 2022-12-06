export const CHANGE_CUSTOM_INPUT = 'CHANGE_CUSTOM_INPUT';

export function actionChangeCustomInput(newValue, inputName) {
  return {
    type: CHANGE_CUSTOM_INPUT,
    payload: {
      newValue,
      inputName,
    },
  };
}
