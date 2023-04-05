import { NavLink } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Controller } from "./Controller";
import styles from "./categories.module.scss";

export const View = () => {
  const { loading, categories } = Controller();

  return (
    <div className={styles.categories_container}>
      {loading ? (
        <Loader />
      ) : (
        categories.map(({ id, name }) => {
          return (
            <NavLink
              to={`/${id}`}
              key={id}
              // @ts-ignore
              className={({ isActive }) =>
                isActive ? styles.activeLink : null
              }
            >
              {name}
            </NavLink>
          );
        })
      )}
    </div>
  );
};
