import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';

const configureStore = createStore(reducer, applyMiddleware(logger));

export default configureStore;
