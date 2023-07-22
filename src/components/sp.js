import {createContext,useReducer,useContext} from 'react'

export const StateContext = createContext();

const StateProvider= ({children,initialState,reducer})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
export default StateProvider;

export const useStateProvider= ()=> useContext(StateContext);