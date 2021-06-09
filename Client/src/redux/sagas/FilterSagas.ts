import { put } from "redux-saga/effects";
import {
  FILTER_BY_CATEGORIES_SUCCESS,
  FILTER_BY_COLORS_SUCCESS,
  FILTER_BY_PRICE_SUCCESS,
} from "../actionTypes";

function* filterProducts() {}

function* filterByCategories(input: any) {
  let categories = input.categories;
  yield put({
    type: FILTER_BY_CATEGORIES_SUCCESS,
    categories: categories,
  });
}

function* filterByColors(input: any) {
  let colors = input.colors;
  yield put({
    type: FILTER_BY_COLORS_SUCCESS,
    colors: colors,
  });
}

function* filterByPrice(input: any) {
  let price = input.price;
	console.log(price);
	
  yield put({
    type: FILTER_BY_PRICE_SUCCESS,
    price: price,
  });
}

export { filterProducts, filterByCategories, filterByColors, filterByPrice };
