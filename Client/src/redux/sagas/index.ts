import { all, takeEvery } from "redux-saga/effects";
import { CHANGE_CURRENCY, CHANGE_LANGUAGE, CHANGE_THEME } from "../actionTypes";
import { changeTheme, changeCurrency, changeLanguage } from "./SwitcherSagas";

function* rootSagas() {
  yield all([
    takeEvery(CHANGE_CURRENCY, changeCurrency),
    takeEvery(CHANGE_LANGUAGE, changeLanguage),
    takeEvery(CHANGE_THEME, changeTheme)
  ]);
}

export default rootSagas;
