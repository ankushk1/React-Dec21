import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './reducer/counterReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
const store = createStore(counterReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;