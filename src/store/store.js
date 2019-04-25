import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ));

var initialState = {
    currentVideo : null,
    videoList: exampleVideoData
}

export default store
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
