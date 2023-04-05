import * as Types from "../../actions/cats/actionTypes";

export const GetCatsRequest = () => ({
  type: Types.GET_CATS_REQUEST,
});

export const GetCatsSuccess = (data: any) => {
  return {
    type: Types.GET_CATS_SUCCESS,
    payload: data,
  };
};

export const GetCatsError = () => ({
  type: Types.GET_CATS_ERROR,
});

export const GetMoreCatsRequest = () => ({
  type: Types.GET_MORE_CATS_REQUEST,
});

export const GetMoreCatsSuccess = (data: any) => {
  return {
    type: Types.GET_MORE_CATS_SUCCESS,
    payload: data,
  };
};

export const GetMoreCatsError = () => ({
  type: Types.GET_MORE_CATS_ERROR,
});
