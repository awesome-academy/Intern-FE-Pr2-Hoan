import { put } from "redux-saga/effects";
import { HANDLE_SCROLL_SUCCESS } from "../actionTypes";

function* handleScroll(input: any) {
  let curOffsetTop: number = input.pageYOffset;
  yield put({
    type: HANDLE_SCROLL_SUCCESS,
    curOffsetTop: curOffsetTop,
  });
}

export { handleScroll };
