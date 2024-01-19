import React from 'react'
import { ADD_TO_CART, CHANGE_LOGIN_STATUS, CHANGE_THEME, DELETE_FROM_CART, GET_COLLEGE_FAILURE, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_COURSES_FAILURE, GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, SORT_COURSES } from './action'
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
            console.log("CART : ",state.cart)
            const updatedcart = state.cart.filter((item) => item.id != action.payload.id)
            console.log("UPDAATED : ",updatedcart)
            return { ...state, cart:updatedcart }
        case SORT_COURSES: 
            switch (action.payload) {  
                case "popular":  
                    const popularSorted = state.courses.sort((a, b) => {  
                        return b.rating - a.rating   
                    }) 
                    return { ...state, cart: popularSorted }
                case "priceHighToLow":  
                    console.log("priceHighToLow")
                    const priceHighToLow = state.courses.sort((a, b) => {  
                        return b.coursePrice - a.coursePrice   
                    }) 
                    console.log(priceHighToLow)
                    return { ...state, cart: priceHighToLow }
                 case "priceLowToHigh":  
                    const priceLowToHigh = state.courses.sort((a, b) => {  
                        return a.coursePrice - b.coursePrice   
                    }) 
                    return { ...state, cart: priceLowToHigh }
                 case "duraLowToHigh":  
                    const duraLowToHigh = state.courses.sort((a, b) => {  
                        return a.duration - b.duration
                    }) 
                    return { ...state, cart: duraLowToHigh }
                 case "duraHighToLow":  
                    const duraHighToLow = state.courses.sort((a, b) => {  
                        return b.duration - a.duration   
                    }) 
                    return { ...state, cart: duraHighToLow }
                default:
                    return state
            }
            // "priceHighToLow""priceLowToHigh" "duraLowToHigh"  duraHighToLow
        case CHANGE_LOGIN_STATUS:
            return { ...state, isLoggedIn: !state.isLoggedIn }
        default:
            return state;
    }
}

export default reducer