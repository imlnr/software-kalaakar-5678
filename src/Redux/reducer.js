// import React from 'react'
import {
  ADD_TO_CART,
  ADD_TO_REGISTERED_COURSES,
  CHANGE_LOGIN_LOGOUT,
  CHANGE_LOGIN_REQUEST,
  CHANGE_LOGIN_STATUS,
  CHANGE_THEME,
  DELETE_FROM_CART,
  DELETE_FROM_REGISTERED_COURSES,
  GET_COLLEGE_FAILURE,
  GET_COLLEGE_REQUEST,
  GET_COLLEGE_SUCCESS,
  GET_COURSES_FAILURE,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  RESET_CART,
  SORT_COURSES,
  UPDATE_CART_PRICE,
} from "./action";

const initialState = {
  colleges: [],
  isLoading: false,
  isError: false,
  theme: "light",
  isLoggedIn: false,
  user: {},
  courses: [],
  cart: [],
  cartPrice: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLLEGE_REQUEST:
      return { ...state, isLoading: true };
    case GET_COLLEGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        colleges: action.payload.colleges,
      };
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
      return { ...state, isError: true };
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case UPDATE_CART_PRICE:
      console.log("Action : ", action);
      return { ...state, cartPrice: action.payload };
    case DELETE_FROM_CART:
      const updatedcart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: updatedcart };
    case ADD_TO_REGISTERED_COURSES:
      return {
        ...state,
        registeredCourses: [...state.registeredCourses, action.payload],
      };
    case DELETE_FROM_REGISTERED_COURSES:
      const updatedRegisteredcart = state.registeredCourses.filter(
        (item) => item.id != action.payload.id
      );
      return { ...state, registeredCourses: updatedRegisteredcart };

    case CHANGE_LOGIN_STATUS:
      return { ...state, isLoggedIn: true, isLoading: false };
    case CHANGE_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case CHANGE_LOGIN_LOGOUT:
      return { ...state, isLoggedIn: false, user: {} };
    case RESET_CART:
        return {...state,cart:[]}
    default:
      return state;
  }
};