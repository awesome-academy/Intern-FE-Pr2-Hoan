import { HANDLE_SCROLL_SUCCESS } from "../actionTypes";

const initialize: ScrollState = {
  curOffsetTop: 0,
};

const scrollReducer = (state = initialize, action: ScrollActions) => {
  switch (action.type) {
    case HANDLE_SCROLL_SUCCESS: {
      return {
        ...state,
        curOffsetTop: action.curOffsetTop,
      };
    }
    default:
      return state;
  }
};

export default scrollReducer;
