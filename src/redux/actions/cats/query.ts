import {
  GetCatsError,
  GetCatsRequest,
  GetCatsSuccess,
  GetMoreCatsError,
  GetMoreCatsRequest,
  GetMoreCatsSuccess,
} from "./actions";
import axios from "axios";

export const GetCats = (id: string) => {
  return async (dispatch: (dispatch: any) => Promise<void>) => {
    dispatch(GetCatsRequest());
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`
      );
      const data = res.data;
      dispatch(GetCatsSuccess(data));
    } catch (error) {
      dispatch(GetCatsError());
    }
  };
};

export const GetMoreCats = (id: string, page: number) => {
  return async (dispatch: (dispatch: any) => Promise<void>) => {
    dispatch(GetMoreCatsRequest());
    try {
      const res = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`
      );
      const data = res.data;
      dispatch(GetMoreCatsSuccess(data));
    } catch (error) {
      dispatch(GetMoreCatsError());
    }
  };
};
