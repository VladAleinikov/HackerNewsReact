import { all } from "redux-saga/effects"
import { commentsWatcher } from "./commentsSaga"
import { newsWatcher } from "./newsSaga"
import { storyWatcher } from "./storySaga"

export function* rootWatcher() {
      yield all([newsWatcher() , commentsWatcher(), storyWatcher() ])
}