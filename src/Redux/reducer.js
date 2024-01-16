import React from 'react'
import {GET_COLLEGE_SUCCESS } from './action'
const initialState = {
    colleges: [],
    loading: false,
    isError: false,
    theme: "light",
    isLoggedIn: false,
    user: {}
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case GET_COLLEGE_SUCCESS:
            return {...state,colleges:[...state.colleges,action.payload]};
        default:
            return state;
    }
}

export default reducer