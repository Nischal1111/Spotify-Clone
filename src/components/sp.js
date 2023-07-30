
import { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

export const StateContext = createContext();

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export default StateProvider;

export const useStateProvider = () => useContext(StateContext);
