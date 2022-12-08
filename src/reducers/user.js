import { CHANGE_CUSTOM_INPUT } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CUSTOM_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };
    default:
      return state;
  }
};

export default reducer;
