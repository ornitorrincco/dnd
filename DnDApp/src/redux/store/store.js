import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/appReducer';
import rootSaga from '../sagas/rootSaga';
import { middleware } from '../../navigation/navigation';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, logger, middleware)
  );
  console.log('STORE: ', store.getState());
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
