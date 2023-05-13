import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_PENDING, AUTH_REQUEST_SUCCESS, SIGNUP_REQUEST_FAILURE, SIGNUP_REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS } from "./actionType";

const initalState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
  loginMessage:"",
  signupMessage:"",
  name:"",
};

export const reducer = (state = initalState, { type, payload }) => {
  // console.log(state.isAuth)
  // console.log(payload)
  switch (type) {
    case AUTH_REQUEST_PENDING:{
      return {...state,isLoading:true}
    }
    case AUTH_REQUEST_SUCCESS :{
      return {...state,isLoading:false,isAuth:true,token:payload.token,name:payload.name}
    }
    case AUTH_REQUEST_FAILURE:{
      return {...state,isLoading:false,isError:true,loginMessage:payload}
    }
    case SIGNUP_REQUEST_PENDING:{
      return {...state,isLoading:true}
    }
    case SIGNUP_REQUEST_SUCCESS :{
      return {...state,isLoading:false,signupMessage:payload}
    }
    case SIGNUP_REQUEST_FAILURE:{
      return {...state,isLoading:false,isError:true,signupMessage:payload}
    }
    
    default:
      return state;
  }
};
