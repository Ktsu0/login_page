import styles from "./home_page.module.scss";
import Game from "../../components/container/game/Game";
import CardsContainer from "../../components/container/cards/CardsContainer";


// --- COMPONENTE PRINCIPAL ---
const HomePage = () => {
  
  // --- JSX FINAL ---
  return (
    <div className={styles.body}>
      <Game />
      <CardsContainer />;
    </div>
  );
};

export default HomePage;