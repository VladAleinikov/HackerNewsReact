import { call, put, takeEvery } from "redux-saga/effects";
import { fetchComments, FETCH_COMMENTS, FETCH_STORY, setStory } from "../store/newsReducer";


function* fetchStoryWorker(action) {

      const data = yield call(() => fetch(`https://hacker-news.firebaseio.com/v0/item/${action.payload}.json?print=pretty`))
      const json = yield call(() => new Promise(res => res(data.json())));

      yield put(setStory(json));
}

export function* storyWatcher() {
      yield takeEvery(FETCH_STORY, fetchStoryWorker);
}