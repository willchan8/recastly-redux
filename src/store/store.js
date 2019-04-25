import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

var initialState = {
  videos: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

export default store;
// TODO:  Create your redux store, apply thunk as a middleware, and export it!
