import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotron';

import App from './App';
import { store, persistor } from './store';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#402845" barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
