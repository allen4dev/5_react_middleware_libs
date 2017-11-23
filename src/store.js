import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import apiMiddleware from './middlewares/apiMiddleware';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger, apiMiddleware));

export default store;
