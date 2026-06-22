import styles from "./App.module.css";
import Menu from "./components/Menu";
import { menu } from "./data/menuData";

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.title}>Restaurantmeny</h1>
      <p className={styles.intro}>Velkommen! Her finner du våre retter.</p>

      <Menu menu={menu} />
    </main>
  );
}

export default App;
