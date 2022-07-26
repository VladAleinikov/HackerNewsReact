import { call, put, takeEvery } from "redux-saga/effects";
import { fetchComments, FETCH_COMMENTS, setStory } from "../store/newsReducer";


function* fetchCommetsWorker(action) {

      function* setComments(story) {

            if (story.kids === undefined)
                  return story;
            for (let i = 0; i < story.kids.length; i++) {
                  let comment = yield call(() => fetch(`https://hacker-news.firebaseio.com/v0/item/${story.kids[i]}.json?print=pretty`));
                  story.kids[i] = yield call(() => new Promise(res => res(comment.json())))

                  story.kids[i] = yield setComments(story.kids[i]);
            }

            return story;
      }
      let story = yield setComments(action.payload);

      yield put(setStory(story));
}

export function* commentsWatcher() {
      yield takeEvery(FETCH_COMMENTS, fetchCommetsWorker);
}