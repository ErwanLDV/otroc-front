import { MESSAGE_POPUP } from '../actions/utils';

export const initialState = {
  messagePopUp: '',
  isLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_POPUP:
      return {
        ...state,
        messagePopUp: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
