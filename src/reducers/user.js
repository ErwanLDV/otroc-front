import { actionChangeTextAreaAnnoucement } from '../actions/annoucements';
import {
  AUTHENT_ERROR,
  AUTHENT_SUCCESS,
  CHANGE_CUSTOM_INPUT_USER,
  LOGOUT,
  SAVE_OTHER_USER_PROFIL,
  SAVE_USER_OFFERS,
  SAVE_USER_PROFIL,
  SAVE_USER_WISHES,
} from '../actions/user';

export const initialState = {
  email: 'otroc1@oclock.io',
  password: 'otroc',
  activeSession: null,
  token: null,
  pseudo: '',
  isLogged: false,
  message: '',
  firstname: '',
  lastname: '',
  zipcode: '',
  phoneNumber: '',
  currentUserProfil: {},
  currentUserOffers: [],
  currentUserWishes: [],
  otherUserProfil: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CUSTOM_INPUT_USER:
      if (action.payload.parentObject) {
        return {
          ...state,
          [action.payload.parentObject]: {
            ...state[action.payload.parentObject],
            [action.payload.inputName]: action.payload.newValue,
          },
        };
      }
      return {
        ...state,
        [action.payload.inputName]: action.payload.newValue,
      };
    case AUTHENT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        password: '',
        pseudo: action.payload.pseudo,
        token: action.payload.token,
        email: '',
        activeSession: action.payload,
      };
    case AUTHENT_ERROR:
      return {
        ...state,
        message: "Erreur lors de l'identification",
      };
    case LOGOUT:
      return {
        ...state,
        email: '',
        password: '',
        token: null,
        activeSession: null,
        isLogged: false,
        message: '',
        pseudo: '',
      };
    case SAVE_USER_PROFIL:
      return {
        ...state,
        currentUserProfil: action.payload,
      };
    case SAVE_USER_OFFERS:
      return {
        ...state,
        currentUserOffers: action.payload,
      };
    case SAVE_USER_WISHES:
      return {
        ...state,
        currentUserWishes: action.payload,
      };
    case SAVE_OTHER_USER_PROFIL:
      return {
        ...state,
        otherUserProfil: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
