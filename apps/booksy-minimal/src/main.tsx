import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles.css';
import { store } from "@redux-practice/store";
import { Provider } from 'react-redux';

import App from './app/app';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
