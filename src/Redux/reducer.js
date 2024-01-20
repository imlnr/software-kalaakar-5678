 
import React from 'react'
import { ADD_TO_CART, ADD_TO_REGISTERED_COURSES, CHANGE_LOGIN_STATUS, CHANGE_THEME, DELETE_FROM_CART, DELETE_FROM_REGISTERED_COURSES, GET_COLLEGE_FAILURE, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_COURSES_FAILURE, GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, SORT_COURSES } from './action'
import { faL } from '@fortawesome/free-solid-svg-icons';
 const initialState = {
    colleges: [],
    isLoading: false,
    isError: false,
    theme: "light",
    isLoggedIn: true,
    user: {
        "id": 1,
        "name": "Vinaygoud Meti",
        "phone": 9876543210,
        "email": "vinay@gmail.com",
        "username": "vinay_meti",
        "avatar": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        "password": "vinay@123",
        "role": "admin",
        "coursesEnrolled": [
            {
                "courseTitle": "Full Stack Web Development",
                "completed": 75
            },
            {
                "courseTitle": "Artificial Intelligence",
                "completed": 43
            }
        ],
        "coursesAdded": [
            "Full Stack Web Development"
        ]
    },
    courses: [],
    cart: [],
    registeredCourses : []
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
            return { ...state, isError: true };
        case GET_USER_FAILURE:
            return { ...state, isError: true }
        case CHANGE_THEME:
            return { ...state, theme: action.payload }
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case ADD_TO_REGISTERED_COURSES:
            return { ...state, registeredCourses: [...state.registeredCourses, action.payload] }
        case DELETE_FROM_CART: 
            const updatedcart = state.cart.filter((item) => item.id != action.payload.id) 
           return { ...state, cart: updatedcart }
        case DELETE_FROM_REGISTERED_COURSES:  
            const updatedRegisteredcart = state.registeredCourses.filter((item) => item.id != action.payload.id) 
            return { ...state, registeredCourses: updatedRegisteredcart }
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
            return { ...state, isLoggedIn: action.payload }
        default:
            return state;
    }
}

export default reducer