import styles from "../App.module.css";

function Dish({ dish }) {
  return (
    <article className={styles.dishCard}>
      <div className={styles.dishHeader}>
        <h2>{dish.tittel}</h2>
        <span>{dish.pris}</span>
      </div>

      <p className={styles.category}>{dish.kategori}</p>
      <p className={styles.ingredients}>{dish.ingredienser}</p>
    </article>
  );
}

export default Dish;
