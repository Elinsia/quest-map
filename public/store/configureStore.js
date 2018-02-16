import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import actions from '../actions';
import reducer from '../reducers';

const logicMiddleware = createLogicMiddleware(actions);
const configureStore = createStore(reducer, composeWithDevTools(applyMiddleware(logicMiddleware, logger)));

export default configureStore;
