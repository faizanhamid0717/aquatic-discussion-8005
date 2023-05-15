import axios from "axios"
import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_PENDING, AUTH_REQUEST_SUCCESS, SIGNUP_REQUEST_FAILURE, SIGNUP_REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS } from "./actionType"

export const login=(email,password)=>(dispatch)=>{
        dispatch({type:AUTH_REQUEST_PENDING})
        return axios.post("https://erin-inquisitive-tuna.cyclic.app/login",{email,password})
        .then((res)=>{
                // console.log(res.data)
                dispatch({type:AUTH_REQUEST_SUCCESS,payload:{token:res.data.token,name:res.data.name}})
        })
        .catch((err)=>{
                dispatch({type:AUTH_REQUEST_FAILURE,payload:err.response.data.message})
        })
}

export const signup=(payload)=>(dispatch)=>{
        dispatch({type:SIGNUP_REQUEST_PENDING})
        return axios.post("https://erin-inquisitive-tuna.cyclic.app/signup",payload)
        .then((res)=>{
                // console.log(res)
                dispatch({type:SIGNUP_REQUEST_SUCCESS,payload:res.data.message})
        })
        .catch((err)=>{
                // console.log(err)
                dispatch({type:SIGNUP_REQUEST_FAILURE,payload:err.response.data.message})
        })
}