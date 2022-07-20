import { all } from "redux-saga/effects"
import { newsWatcher } from "./newsSaga"

export function* rootWatcher() {
      yield all([newsWatcher()])
}