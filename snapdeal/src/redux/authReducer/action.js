import axios from "axios"
import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_PENDING, AUTH_REQUEST_SUCCESS } from "./actionType"

export const login=(email,password)=>(dispatch)=>{
        dispatch({type:AUTH_REQUEST_PENDING})
        axios.post("https://reqres.in/api/login",{email,password})
        .then((res)=>{dispatch({type:AUTH_REQUEST_SUCCESS,payload:res.data.token})})
        .catch((err)=>{dispatch({type:AUTH_REQUEST_FAILURE})})
}