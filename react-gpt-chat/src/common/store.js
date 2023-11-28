import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import messageReducer from '../state/message'
import messageSaga from '../state/message/saga'
import userSaga from '../state/user/saga'
import userReducer from '../state/user'
import { all } from 'redux-saga/effects';

const reducer = combineReducers({
    message: messageReducer,
    user: userReducer,
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga(){
  yield all([messageSaga(), userSaga()]);
}
sagaMiddleware.run(rootSaga);

export default store;