import {
  SAVE_OFFERS_ANNOUCEMENTS,
  SAVE_ONE_OFFER_ANNOUCEMENT,
  SAVE_ONE_WISH_ANNOUCEMENT,
  SAVE_WISHES_ANNOUCEMENTS,
  CHANGE_CUSTOM_INPUT_ANNOUCEMENT,
  CHANGE_TEXT_AREA_ANNOUCEMENT,
  CHANGE_SELECT_CATEGORIES_ANNOUCEMENT,
  SAVE_EDIT_OFFER_ANNOUCEMENT,
  SAVE_EDIT_WISH_ANNOUCEMENT,
  CLEANUP_ANNOUCEMENT_PAGE,
  ENABLE_MODE_EDIT,
  DISABLE_MODE_EDIT,
  PAGE_RELOAD,
} from '../actions/annoucements';

export const initialState = {
  inputSearchBar: '',
  annoucementsArray: [],
  currentAnnoucement: {},
  annoucementType: 'offer',
  modeEdit: false,
  pageReload: false,
  addOrEditAnnoucement: {
    type: 'permanent',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CUSTOM_INPUT_ANNOUCEMENT:
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

    case CHANGE_TEXT_AREA_ANNOUCEMENT:
      return {
        ...state,
        addOrEditAnnoucement: {
          ...state.addOrEditAnnoucement,
          description: action.payload,
        },
      };

    case CHANGE_SELECT_CATEGORIES_ANNOUCEMENT:
      return {
        ...state,
        addOrEditAnnoucement: {
          ...state.addOrEditAnnoucement,
          categories: [Number(action.payload)],
        },
      };

    case ENABLE_MODE_EDIT:
      return {
        ...state,
        modeEdit: true,
      };

    case DISABLE_MODE_EDIT:
      return {
        ...state,
        modeEdit: false,
        addOrEditAnnoucement: {
          type: 'permanent',
        },
      };

    case SAVE_OFFERS_ANNOUCEMENTS:
    case SAVE_WISHES_ANNOUCEMENTS:
      return {
        ...state,
        annoucementsArray: action.payload,
      };

    case SAVE_ONE_OFFER_ANNOUCEMENT:
    case SAVE_ONE_WISH_ANNOUCEMENT:
      return {
        ...state,
        currentAnnoucement: action.payload,
      };

    case SAVE_EDIT_WISH_ANNOUCEMENT:
      return {
        ...state,
        modeEdit: true,
        annoucementType: 'wish',
        addOrEditAnnoucement: action.payload,
      };

    case SAVE_EDIT_OFFER_ANNOUCEMENT:
      return {
        ...state,
        modeEdit: true,
        annoucementType: 'offer',
        addOrEditAnnoucement: action.payload,
      };

    case CLEANUP_ANNOUCEMENT_PAGE:
      return {
        ...state,
        currentAnnoucement: {},
      };

    case PAGE_RELOAD:
      return {
        ...state,
        pageReload: !state.pageReload,
      };

    default:
      return state;
  }
};

export default reducer;
