import { put, select } from "redux-saga/effects";
import { CHANGE_CURRENCY_SUCCESS, CHANGE_LANGUAGE_SUCCESS } from "../actionTypes";

function* changeTheme() {
  const curSwitchers:SwitchersState = yield select((state: any) => state.switchers);
  console.log(curSwitchers);
  return;
}
function* changeCurrency(input: any) {
	const currency:string = input.currency
	localStorage.setItem("currency", currency)
  yield put ({
		type: CHANGE_CURRENCY_SUCCESS,
		currency: currency
	})
}
function* changeLanguage(input :any) {
	const language:string = input.language
	localStorage.setItem("language", language)
	yield put ({
		type: CHANGE_LANGUAGE_SUCCESS,
		language: language
	})
	return;
}

export { changeTheme, changeCurrency, changeLanguage };
