import React from "react";

const Categorories = React.lazy(
  () => import("../components/categories/Categories")
);
const Cats = React.lazy(() => import("../components/cats/Cats"));

export const MainPage = () => {
  return (
    <div>
      <Categorories />
      <Cats />
    </div>
  );
};
