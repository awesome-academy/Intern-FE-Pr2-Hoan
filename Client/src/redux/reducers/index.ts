import { combineReducers } from "redux";

import switchersReducer from "./switchersReducer";
import scrollReducer from "./scrollReducer";
import filterReducer from "./filterReducer";

const rootReducers = combineReducers({
	switchers: switchersReducer,
	scroll: scrollReducer,
	filter: filterReducer
})

export default rootReducers
