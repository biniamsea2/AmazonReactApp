// setting up data layer. In order to track basket

import React, { createContext, useContext, useReducer } from "react";

// data layer:
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* children is the entire app because it is under the stateprovider in index.js */}
        {children}
    </StateContext.Provider>
);

//how we us it inside of a component
export const useStateValue = () => useContext(StateContext);