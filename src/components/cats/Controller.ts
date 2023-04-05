import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useParams } from "react-router-dom";
import { GetCats, GetMoreCats } from "../../redux/actions/cats/query";

export const Controller = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const cats = useAppSelector((state) => state.cats.cats);
  const loading = useAppSelector((state) => state.cats.loading);
  const { id } = useParams();

  useEffect(() => {
    // @ts-ignore
    dispatch(GetCats(id));
  }, [id]);

  useEffect(() => {
    // @ts-ignore
    page !== 1 && dispatch(GetMoreCats(id, page));
  }, [page]);

  const changePage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return {
    cats,
    loading,
    changePage,
  };
};
