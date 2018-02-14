import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger';
import actions from '../actions';
import reducer from '../reducers';

const logicMiddleware = createLogicMiddleware(actions);
const configureStore = createStore(reducer, applyMiddleware(logicMiddleware, logger));

export default configureStore;
