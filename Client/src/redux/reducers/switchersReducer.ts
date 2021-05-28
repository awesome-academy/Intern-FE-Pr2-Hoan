import {
  CHANGE_CURRENCY_SUCCESS,
  CHANGE_LANGUAGE_SUCCESS,
  CHANGE_THEME_SUCCESS,
} from "../actionTypes";

const language: string | null = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "English";
const currency: string | null = localStorage.getItem("currency")
  ? localStorage.getItem("currency")
  : "USD";
const theme: string | null = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

const initialize: SwitchersState = {
  language: language,
  currency: currency,
  theme: theme,
};

const switchersReducer = (state = initialize, action: SwitchersAction) => {
  switch (action.type) {
    case CHANGE_THEME_SUCCESS: {
      return {
        ...state,
        theme: action.theme,
      };
    }
    case CHANGE_CURRENCY_SUCCESS: {
      return {
        ...state,
        currency: action.currency,
      };
    }
    case CHANGE_LANGUAGE_SUCCESS: {
      return {
        ...state,
        language: action.language,
      };
    }
    default:
      return state;
  }
};

export default switchersReducer;
