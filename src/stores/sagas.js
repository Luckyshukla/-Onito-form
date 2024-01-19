/**
 * sagas js
 *
 * it will have all the sagas combined
 *
 * For more function follow axios documentation
 *
 * Project:
 *
 * Devlopers:
 * 1. Lucky shukla
 */
// import { takeLatest } from "redux-saga/effects";

import { takeLatest } from "redux-saga/effects";
import { fetchCountrySaga } from "../pages/store/saga";
import { Types } from "./actions";
// import { loginSaga } from "../pages/auth/store/saga";
export function* watchAuth() {
  yield takeLatest(Types.FETCH_COUNTRY_NAME, fetchCountrySaga);
}
