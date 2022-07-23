import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_NEWS, setNews } from "../store/newsReducer";


const fetchMaxNewsId = () => fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty');

function* fetchNewsWorker() {
      const maxNewsIdPromise = yield call(fetchMaxNewsId);
      const maxNewsId = yield call(() => new Promise(res => res(maxNewsIdPromise.json())))
      let json = [];
      for (let i = maxNewsId; json.length !== 100; i--) {
            const news = yield call(() => fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`));
            json.push(yield call(() => new Promise(res => res(news.json()))));
            if (json[json.length - 1].type !== 'story')
                  json.pop();
      }
      yield put(setNews(json));
}

export function* newsWatcher() {
      yield takeEvery(FETCH_NEWS, fetchNewsWorker)
}