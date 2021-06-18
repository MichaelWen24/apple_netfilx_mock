import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import reducer from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  movie: reducer
});
const enhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancers);

export default store;