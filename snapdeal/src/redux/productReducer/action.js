import axios from "axios";
import {
  DELETE_PRODUCT_REQUEST_SUCCESS,
  GET_PRODUCT_REQUEST_SUCCESS,
  PATCH_PRODUCT_REQUEST_SUCCESS,
  POST_PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILURE,
  PRODUCT_REQUEST_PENDING,
} from "./actionType";

const API = `https://snapdeal-clone-server.onrender.com/Add`;

//For Getting The Data
export const getProductFn = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST_PENDING });


   axios.get(`https://snapdeal-clone-server.onrender.com/Add`,obj)
    .then((res) => {
      // console.log('res-data',res.data)
      dispatch({ type: GET_PRODUCT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};

//For Posting The Data
export const postProductFn = (productData) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST_PENDING });
  return axios
    .post(API, productData)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_REQUEST_SUCCESS });
      dispatch({ type: GET_PRODUCT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};

//For Patching The Data
export const patchProductFn = (id, productData) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST_PENDING });
  return axios
    .patch(`${API}/${id}`, productData)
    .then((res) => {
      dispatch({ type: PATCH_PRODUCT_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};

//For Deleting The Data
export const deleteProductFn = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST_PENDING });
  return axios
    .delete(`${API}/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT_REQUEST_SUCCESS });
    })
    .catch((err) => {
      console.log("API FAILURE", err);
      dispatch({ type: PRODUCT_REQUEST_FAILURE });
    });
};
