import {
    FETCH_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
    REDUCER_CLEAN_REQUEST,
  } from "../utils/constants/actionTypes"
  
  const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
  }
  
  export const allProductList = (state, action) => {
    state = state || INITIAL_STATE
    switch (action?.type) {
      case FETCH_PRODUCT_LIST:
        return Object.assign({}, state, {
          loading: true,
        })
      case FETCH_PRODUCT_LIST_SUCCESS:
        return Object.assign({}, state, {
          payload: action.data,
          loading: false,
          errors: {},
        })
  
      case FETCH_PRODUCT_LIST_FAILURE:
        return Object.assign({}, state, {
          payload: [],
          loading: false,
          errors: action.error,
        })
      case REDUCER_CLEAN_REQUEST:
        return Object.assign({}, state, {
          payload: [],
          loading: false,
          errors: {},
        })
      default:
        return state
    }
  }
  