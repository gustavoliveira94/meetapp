import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducers from './modules/rootReducers';
import rootSagas from './modules/rootSagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
