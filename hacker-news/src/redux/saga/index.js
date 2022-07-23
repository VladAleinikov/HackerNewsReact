import { all } from "redux-saga/effects"
import { commentsWatcher } from "./commentsSaga"
import { newsWatcher } from "./newsSaga"

export function* rootWatcher() {
      yield all([newsWatcher(), commentsWatcher()])
}