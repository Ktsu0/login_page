// Cria o quadro (12*12)

import styles from "./../../container/game/game.module.scss";
import Blok from "./Blok";

const Grid = ({ bloks, colorIndexes, onBlokClick }) => {
    return (
        <div className={styles.container}>
            {bloks.map((value, index) => {
                const blokClass = value === 1 ? "toggle-on" : "toggle-off";
                return (
                    <Blok
                        key={index}
                        blokClass={blokClass}
                        onClick={() => onBlokClick(index)}
                        colorIndex={colorIndexes[index]}
                    />
                );
            })}
        </div>
    );
};

export default Grid;
