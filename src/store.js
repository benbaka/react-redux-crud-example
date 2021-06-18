//import {createStore, applyMiddleware} from 'redux';
//import {composeWithDevTools} from "redux-devtools-extension";
//import thunk from 'redux-thunk';
import Reducer from "./reducers/Reducer";
import React, {createContext, useReducer} from 'react';


const initialState = {
    posts: [
        {
            'title':"The Ghanaian Saga",
            'description':'For all the wild guys',
            'id':1
        },
        {
            'title':'The new Mac ',
            'description':'M1 chip inside',
            'id': 2
        }

    ],
    error: null,
};


const Store =({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};


export const Context = createContext(initialState);

export default Store;