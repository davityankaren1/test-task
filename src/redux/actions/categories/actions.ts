import * as Types from "../../actions/categories/actionTypes";

export const GetCategoriesRequest = () => ({
  type: Types.GET_CATEGORIES_REQUEST,
});

export const GetCategoriesSuccess = (data: any) => {
  return {
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: data,
  };
};

export const GetCategoriesError = () => ({
  type: Types.GET_CATEGORIES_REQUEST,
});
