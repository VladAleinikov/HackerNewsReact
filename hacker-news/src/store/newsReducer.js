const defaultState = {
      news: []
}
export const SET_NEWS = "SET_NEWS";
export const FETCH_NEWS = "FETCH_NEWS";

export default function newsReducer(state = defaultState, action) {
      // eslint-disable-next-line default-case
      switch (action.type) {
            case SET_NEWS:
                  return { ...state, news: action.payload }
      }
      return state
}

export const setNews = payload => ({ type: SET_NEWS, payload })
export const fetchNews = () => ({ type: FETCH_NEWS })

