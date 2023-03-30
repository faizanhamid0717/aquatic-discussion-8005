import {
  GET_PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_PENDING,
  PATCH_PRODUCT_REQUEST_SUCCESS,
  POST_PRODUCT_REQUEST_SUCCESS,
  DELETE_PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILURE,
} from "./actionType";
const initalState = {
  isLoading: false,
  isError: false,
  product: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case GET_PRODUCT_REQUEST_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case POST_PRODUCT_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case PATCH_PRODUCT_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case DELETE_PRODUCT_REQUEST_SUCCESS:
      return { ...state, isLoading: false };
    case PRODUCT_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
