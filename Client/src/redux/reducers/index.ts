import { combineReducers } from "redux";
import switchersReducer from "./switchersReducer";
import scrollReducer from "./scrollReducer";

const rootReducers = combineReducers({
	switchers: switchersReducer,
	scroll: scrollReducer
})

export default rootReducers
