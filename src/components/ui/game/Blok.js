// Cria os as cores dos circulos

import styles from "./../../container/game/game.module.scss";

const colorPalette = ["#228B22", "#046307"];

const Blok = ({ onClick, blokClass, colorIndex }) => {
    const backgroundColor = colorIndex !== null ? colorPalette[colorIndex] : undefined;

    return (
        <div
            className={`${styles.blok} ${styles[blokClass]}`}
            onClick={onClick}
            style={backgroundColor ? { backgroundColor } : {}}
        />
    );
};

export default Blok;
