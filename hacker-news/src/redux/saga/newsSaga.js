import { put, takeEvery, call } from "redux-saga/effects"
import { FETCH_NEWS, setNews } from "../store/newsReducer";


const fetchNewestNews = () => fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');

function* fetchNewsWorker() {
      const newestNewsPromise = yield call(fetchNewestNews);
      const newestNews = yield call(() => new Promise(res => res(newestNewsPromise.json())))

      let json = [];
      for (let i = 0; json.length < 10; i++) {
            const news = yield call(() => fetch(`https://hacker-news.firebaseio.com/v0/item/${newestNews[i]}.json?print=pretty`));
            json.push(yield call(() => new Promise(res => res(news.json()))));

      }

      yield put(setNews(json));
}

export function* newsWatcher() {
      yield takeEvery(FETCH_NEWS, fetchNewsWorker)
}