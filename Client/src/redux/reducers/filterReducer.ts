import { FILTER_BY_CATEGORIES_SUCCESS, FILTER_BY_COLORS_SUCCESS, FILTER_BY_PRICE_SUCCESS } from "../actionTypes";

const initialize: FilterState= {
  categories: [],
	colors: [],
	price: {
		min: 0,
		max: 500,
	}
};

const filterReducer = (state = initialize, action: FilterAction) => {
  switch (action.type) {
    case FILTER_BY_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.categories
      };
    }
    case FILTER_BY_COLORS_SUCCESS: {
      return {
        ...state,
        colors: action.colors
      };
    }
    case FILTER_BY_PRICE_SUCCESS: {
      return {
        ...state,
        price: action.price
      };
    }
    default:
      return state;
  }
};

export default filterReducer;