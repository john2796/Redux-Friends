import {
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  UPDATE_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL
} from "../actions/friendAction";

const initialState = {
  friends: [],
  loading: false,
  errors: ""
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        loading: true
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: ""
      };
    case GET_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: ""
      };
    case ADD_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        loading: false
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: ""
      };
    case DELETE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case UPDATE_ITEM:
      return {
        ...state,
        loading: true
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: ""
      };
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
