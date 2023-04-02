import {
  CART_REQUEST_FAILURE,
  CART_REQUEST_SUCCESS,
  CART_REQUEST_PENDING,
} from "./actionType";
const initalState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case CART_REQUEST_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case CART_REQUEST_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
