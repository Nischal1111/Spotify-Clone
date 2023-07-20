import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateContext } from './components/StateProvider.Js';
import { initialState } from './reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContext.Provider initialState={initialState}>
    <App />
    </StateContext.Provider>
  </React.StrictMode>
);
