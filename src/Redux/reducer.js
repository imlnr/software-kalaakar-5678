import React from 'react'
import {CHANGE_LOGIN_STATUS, CHANGE_THEME, GET_COLLEGE_FAILURE, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './action'
import { change_login } from './action-types';
const initialState = {
    colleges: [],
    isLoading: false,
    isError: false,
    theme: "light",
    isLoggedIn: false,
    user: {}
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case GET_COLLEGE_REQUEST:
        return {...state,isLoading:true};
        case GET_COLLEGE_SUCCESS:
            return {...state,isLoading:false,colleges:[...state.colleges,action.payload]};
        case GET_COLLEGE_FAILURE:
            return {...state,isError:true};
        case GET_USER_REQUEST:
            return {...state,isLoading:true};
        case GET_USER_SUCCESS:
            return {...state,isLoading:false,user:action.payload};
        case GET_USER_FAILURE:
            return {...state,isError:true}
        case CHANGE_THEME:
            return {...state,theme:action.payload}
        case CHANGE_LOGIN_STATUS:
            return {...state,isLoggedIn:!state.isLoggedIn}
        default:
            return state;
    }
}

export default reducer