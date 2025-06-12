import styles from "./game.module.scss"
import Grid from "../../ui/game/Grid";
import { useGameLogic } from "../../../hooks/usaGameLogic";
import AnimatedWord from "./../animationText/AnimatedWord";

function Game() {
    const {
        bloks,
        colorIndexes,
        handleClick,
        score,
        progressMessage,
        scoreLevel,
        numTotal
    } = useGameLogic();

    return (
        <div className={styles.home}>
            <div>
                <h1 className={styles.game}>GRID STRIKE</h1>
                <div className={`${styles.score} ${styles[scoreLevel]}`}>
                    <AnimatedWord word="Score" />: {score}/{numTotal}
                </div>
                {progressMessage && <div className={styles.message}>{progressMessage}</div>}
                <Grid
                    bloks={bloks}
                    colorIndexes={colorIndexes}
                    onBlokClick={handleClick}
                />
            </div>
        </div>
    );
}

export default Game;
