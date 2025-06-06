import styles from "./home_page.module.scss";
import Game from "./game/Game";
import Cards from "./cards/Cards";



// --- COMPONENTE PRINCIPAL ---
const HomePage = () => {

 
  // --- JSX FINAL ---
  return (
    <div className={styles.body}>
      <Game />
      <Cards />
    </div>
  );
};

export default HomePage;
