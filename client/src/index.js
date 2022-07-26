import React, {CreateContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import UserStore from './store/UserStore.js'

export const Context = CreateContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={new UserStore()}>
    <App />
  </Context.Provider>
);
