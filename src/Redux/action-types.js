import axios from "axios"
import {CHANGE_LOGIN_STATUS, CHANGE_THEME, GET_COLLEGE_FAILURE, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./action"

export const addcollege_success = (college)=>{
    return {
        type: GET_COLLEGE_SUCCESS,
        payload: college
    }
}
export const addcollege_request = ()=>{
    return {
        type: GET_COLLEGE_REQUEST
    }
}
export const addcollege_failure = ()=>{
    return {
        type: GET_COLLEGE_FAILURE
    }
}

export const addusers_request = ()=>{
    return {
        type: GET_USER_REQUEST
    }
}

export const adduser_success = (user)=>{
    return{
        type: GET_USER_SUCCESS,
        payload: user
    }
}

export const adduser_failure = ()=>{
    return{
        type: GET_USER_FAILURE
    }
}
export const change_login=()=>{
    return{
        type: CHANGE_LOGIN_STATUS
    }
}

export const change_theme = ()=>{
    return {
        type: CHANGE_THEME
    }
}

export const getCollege = () => { 
    return async (dispatch) => {  
        console.log("GET COLLEGE");
        dispatch({ type: GET_COLLEGE_REQUEST  })
        try {
            let data = await axios.get("http://localhost:8080/colleges")
            console.log("COLLEGE DATA : ", data.data)
        dispatch({ type: GET_COLLEGE_SUCCESS, payload: {isLoading:false, colleges:data.data} })

        } catch { 

        }
    }
}