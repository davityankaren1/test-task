import { FC } from "react";
import spinner from "../../assets/spinner.gif";
import styles from "./loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <img src={spinner} />;
    </div>
  );
};
