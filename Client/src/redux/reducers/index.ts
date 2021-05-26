import { combineReducers } from "redux";
import switchersReducer from "./switchersReducer"

const rootReducers = combineReducers({
	switchers: switchersReducer
})

export default rootReducers
