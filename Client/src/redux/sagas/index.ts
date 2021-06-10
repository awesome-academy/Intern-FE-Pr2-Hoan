import { all, takeEvery } from "redux-saga/effects";
import {
  CHANGE_CURRENCY,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  HANDLE_SCROLL,
  FILTER_BY_CATEGORIES,
  FILTER_BY_COLORS,
  FILTER_BY_PRICE,
} from "../actionTypes";
import { changeTheme, changeCurrency, changeLanguage } from "./SwitcherSagas";
import { handleScroll } from "./ScrollSagas";
import { filterByCategories, filterByColors, filterByPrice } from "./FilterSagas";

function* rootSagas() {
  yield all([
    takeEvery(CHANGE_CURRENCY, changeCurrency),
    takeEvery(CHANGE_LANGUAGE, changeLanguage),
    takeEvery(CHANGE_THEME, changeTheme),
    takeEvery(HANDLE_SCROLL, handleScroll),
    takeEvery(FILTER_BY_CATEGORIES, filterByCategories),
    takeEvery(FILTER_BY_COLORS, filterByColors),
    takeEvery(FILTER_BY_PRICE, filterByPrice),
  ]);
}

export default rootSagas;
