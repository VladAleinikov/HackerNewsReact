const defaultState = {
      news: [/* {
            "by": "dhouston",
            "descendants": 71,
            "id": 8863,
            "kids": [8952],
            "score": 111,
            "time": 1175714200,
            "title": "My YC app: Dropbox - Throw away your USB drive",
            "type": "story",
            "url": "http://www.getdropbox.com/u/2/screencast.html"
      } */],
      concretStory: {}
}
export const GET_STORY = "GET_STORY";
export const FETCH_NEWS = "FETCH_NEWS";
export const SET_NEWS = "SET_NEWS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const SET_STORY = "SET_STORY";
export const FETCH_STORY = "FETCH_STORY";

export default function newsReducer(state = defaultState, action) {
      // eslint-disable-next-line default-case
      switch (action.type) {
            case SET_NEWS:
                  return {...state, news: action.payload}
            case GET_STORY:
                  return { ...state, concretStory: state.news.filter(e => e.id == action.payload)[0] }
            case SET_STORY:
                  return {...state, concretStory : action.payload}
      }
      return state
}

export const setNews = payload => ({type: SET_NEWS, payload})
export const getStory = payload => ({ type: GET_STORY, payload })
export const fetchNews = () => ({ type: FETCH_NEWS })
export const fetchComments = article => ({ type: FETCH_COMMENTS , payload: article }) ;
export const setStory = payload => ({ type: SET_STORY, payload });
export const fetchStory = article => ({type: FETCH_STORY, payload: article})
