import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initialState from "./components/reducer";
import StateProvider from './components/sp';
import reducer from "./components/reducer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);
