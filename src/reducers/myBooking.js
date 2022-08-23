import {
  FETCH_BOOKCAR_LIST,
  FETCH_BOOKCAR_LIST_SUCCESS,
  FETCH_BOOKCAR_LIST_FAILURE,
  REDUCER_CLEAN_REQUEST,
} from "../utils/constants/actionTypes"

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
}

export const bookCarList = (state, action) => {
  state = state || INITIAL_STATE
  switch (action?.type) {
    case FETCH_BOOKCAR_LIST:
      return Object.assign({}, state, {
        loading: true,
      })
    case FETCH_BOOKCAR_LIST_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        errors: {},
      })

    case FETCH_BOOKCAR_LIST_FAILURE:
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
