import Dish from "./Dish";
import styles from "../App.module.css";

function Menu({ menu }) {
  return (
    <section className={styles.menu}>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </section>
  );
}

export default Menu;
