import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_PENDING, AUTH_REQUEST_SUCCESS } from "./actionType";

const initalState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST_PENDING:{
      return {...state,isLoading:true}
    }
    case AUTH_REQUEST_SUCCESS :{
      return {...state,isLoading:false,isAuth:true,token:payload}
    }
    case AUTH_REQUEST_FAILURE:{
      return {...state,isLoading:false,isError:true}
    }
    default:
      return state;
  }
};
