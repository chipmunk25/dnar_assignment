import { all } from "redux-saga/effects";

import coinSaga from "./coin"
export default function* rootSaga() {
  yield all([
    coinSaga()
  ]);
}
