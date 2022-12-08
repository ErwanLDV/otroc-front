import {
  AUTHENT_ERROR, AUTHENT_SUCCESS, CHANGE_CUSTOM_INPUT, LOGOUT,
} from '../actions/user';

export const initialState = {
  email: 'toto@supermail.com',
  password: 'tatatata',
  token: null,
  pseudo: 'TotoBoGosseDu75',
  isLogged: true,
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CUSTOM_INPUT:
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };
    case AUTHENT_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case AUTHENT_ERROR:
      return {
        ...state,
        message: 'Erreur lors de l\'identification',
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        token: null,
        isLogged: false,
        message: '',
        pseudo: '',
      };
    default:
      return state;
  }
};

export default reducer;
