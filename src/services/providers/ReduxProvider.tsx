'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div>{children}</div>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
