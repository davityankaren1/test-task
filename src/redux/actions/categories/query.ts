import axios from "axios";
import {
  GetCategoriesError,
  GetCategoriesRequest,
  GetCategoriesSuccess,
} from "./actions";

export const GetCategories = () => {
  return async (dispatch: any) => {
    dispatch(GetCategoriesRequest());
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/categories");
      const data = res.data;
      dispatch(GetCategoriesSuccess(data));
    } catch (error) {
      dispatch(GetCategoriesError());
    }
  };
};
