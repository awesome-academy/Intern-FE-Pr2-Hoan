import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enchancer = composeEnhancers(
  applyMiddleware(sagaMiddleware /*other middleware*/)
  /* other store enhancers if any */
);

const store = createStore(reducer, enchancer);

sagaMiddleware.run(mySaga);

export default store;
