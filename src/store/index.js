import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import userMiddleware from '../middlewares/userMiddleware';

// import nameMiddleware from '../middlewares/nameMiddleware

const middlewareEnhancer = applyMiddleware(
  // nameMiddleware,
  userMiddleware,
);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  reducer,
  composedEnhancers,
);

export default store;
