import axios from "axios";
import {
  CART_REQUEST_FAILURE,
  CART_REQUEST_SUCCESS,
  CART_REQUEST_PENDING,
} from "./actionType";

export const getCartFn = () => (dispatch) => {
  dispatch({ type: CART_REQUEST_PENDING });
  axios
    .get(`https://snapdeal-clone-server.onrender.com/cart`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: CART_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: CART_REQUEST_FAILURE });
    });
};

export const postCartFn = (data) => (dispatch) => {
  console.log("post req cart===1");
  axios
    .post(`https://snapdeal-clone-server.onrender.com/cart/`, data)
    .then((res) => {
      console.log("post req cart");
      console.log(res.data);
      dispatch({ type: CART_REQUEST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: CART_REQUEST_FAILURE });
    });
};
