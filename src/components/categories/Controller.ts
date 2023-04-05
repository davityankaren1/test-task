import { useEffect } from "react";
import { GetCategories } from "../../redux/actions/categories/query";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

export const Controller = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.categories.categories);
  const loading = useAppSelector((state) => state.categories.loading);

  useEffect(() => {
    // @ts-ignore
    dispatch(GetCategories());
  }, []);

  return {
    categories,
    loading,
  };
};
