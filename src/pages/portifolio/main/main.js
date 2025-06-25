import { useRef, useState } from "react";
import MainText from "./MainText";
import BreakoutCanvas from "./game/breakoutCanvas";
import styles from "./main.module.scss"

function Main() {
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const canvasRef = useRef(null);

  // Função de callback passada ao startBreakout
  const handleGameOver = (won) => {
    if (won) setWin(true);
    else setGameOver(true);
    setStartGame(false); // para esconder canvas
  };

  // Reiniciar tudo
  const restartGame = () => {
    setGameOver(false);
    setWin(false);
    setStartGame(true);
  };

  return (
    <main>
      <div className={styles.img_p_container}>
        <div className={`${styles.img_p} ${startGame ? styles.game_mode : styles.image_mode}`}>
          {startGame && (
            <BreakoutCanvas canvasRef={canvasRef} onGameOver={handleGameOver} />
          )}
        </div>

        {!startGame && !gameOver && !win && (
          <button className={styles.start_button} onClick={() => setStartGame(true)}>
            START
          </button>
        )}

        {gameOver && (
          <div className={styles.overlay}>
            <h2>Game Over</h2>
            <button onClick={restartGame}>Reiniciar</button>
          </div>
        )}

        {win && (
          <div className={styles.overlay}>
            <h2>Você venceu!</h2>
            <button onClick={restartGame}>Reiniciar</button>
          </div>
        )}
      </div>

      <MainText />
    </main>

  );
}

export default Main;
