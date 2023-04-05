import { Controller } from "./Controller";
import styles from "./cats.module.scss";
import { Loader } from "../loader/Loader";

export const View = () => {
  const { loading, cats, changePage } = Controller();

  return (
    <div className={styles.images_container}>
      <div className={styles.images}>
        {loading ? (
          <Loader />
        ) : (
          cats.map((cat, index) => {
            return (
              <img className={styles.cat_images} key={index} src={cat.url} />
            );
          })
        )}
      </div>

      <div>{!loading && <button onClick={changePage}>More</button>}</div>
      <div>
        {cats.length === 0 && (
          <p className={styles.notify}>Please select category</p>
        )}
      </div>
    </div>
  );
};
