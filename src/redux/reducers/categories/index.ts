import * as Types from "../../actions/categories/actionTypes";
import { ActionType, initialState } from "./types";

const initialState: initialState = {
  categories: [],
  loading: false,
  error: "",
};

const categoriesReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Types.GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    }
    case Types.GET_CATEGORIES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
