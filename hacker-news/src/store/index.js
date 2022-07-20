import createSagaMiddleware from "@redux-saga/core"
import { applyMiddleware, combineReducers, createStore } from "redux";
import { rootWatcher } from "../saga";
import newsReducer from './newsReducer'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
      newsReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)