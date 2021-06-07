import { all, takeEvery } from "redux-saga/effects";
import { CHANGE_CURRENCY, CHANGE_LANGUAGE, CHANGE_THEME, HANDLE_SCROLL } from "../actionTypes";
import { changeTheme, changeCurrency, changeLanguage } from "./SwitcherSagas";
import { handleScroll } from "./ScrollSagas";

function* rootSagas() {
  yield all([
    takeEvery(CHANGE_CURRENCY, changeCurrency),
    takeEvery(CHANGE_LANGUAGE, changeLanguage),
    takeEvery(CHANGE_THEME, changeTheme),
    takeEvery(HANDLE_SCROLL, handleScroll)
  ]);
}

export default rootSagas;
