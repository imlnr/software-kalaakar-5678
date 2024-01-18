import React from 'react'
import { ADD_TO_CART, CHANGE_LOGIN_STATUS, CHANGE_THEME, DELETE_FROM_CART, GET_COLLEGE_FAILURE, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_COURSES_FAILURE, GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from './action'
const initialState = {
    colleges: [],
    isLoading: false,
    isError: false,
    theme: "light",
    isLoggedIn: true,
    user: {},
    courses: [], 
    cart: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COLLEGE_REQUEST:
            return { ...state, isLoading: true };
        case GET_COLLEGE_SUCCESS:
             return { ...state, isLoading: false, colleges: action.payload.colleges };
         case GET_COLLEGE_FAILURE:
            return { ...state, isError: true };
        case GET_USER_REQUEST:
            return { ...state, isLoading: true };
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case GET_COURSES_REQUEST:
            return { ...state, isLoading: true };
        case GET_COURSES_SUCCESS:
            return { ...state, isLoading: false, courses: action.payload.courses };
        case GET_COURSES_FAILURE:
            return { ...state, isError: true};
        case GET_USER_FAILURE:
            return { ...state, isError: true }
        case CHANGE_THEME:
            return { ...state, theme: action.payload }
          case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload]  }
        case DELETE_FROM_CART:
            const updatedcart = state.cart.filter((item)=> item.id != action.payload.id)
            return { ...state, cart:updatedcart }
       
        case CHANGE_LOGIN_STATUS:
            return { ...state, isLoggedIn: !state.isLoggedIn }
        default:
            return state;
    }
}

export default reducer