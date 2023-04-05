import * as Types from "../../actions/cats/actionTypes";
import { ActionType, IInitialState } from "./types";

const initialState: IInitialState = {
  cats: [],
  loading: false,
  error: "",
};

const catsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Types.GET_CATS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_CATS_SUCCESS: {
      return {
        ...state,
        loading: false,
        cats: action.payload,
      };
    }
    case Types.GET_CATS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case Types.GET_MORE_CATS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_MORE_CATS_SUCCESS: {
      return {
        ...state,
        loading: false,
        cats: [...state.cats, ...action.payload],
      };
    }
    case Types.GET_MORE_CATS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default catsReducer;
