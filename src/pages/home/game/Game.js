import styles from "./game.module.scss"
import React from "react";

// --- CONSTANTES GLOBAIS ---
const numX = 12; // colunas do grid do jogo
const numY = 12; // linhas do grid do jogo
document.documentElement.style.setProperty("--numX", numX);

const colorPalette = ["#226559", "#266B47"]; // cores dos blocos

// --- COMPONENTE BLOK (cada célula do grid do jogo) ---
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

function Game({ }) {
    // --- ESTADOS DO JOGO ---
    const [bloks, setBloks] = React.useState(() => new Array(numX * numY).fill(0)); // 0 ou 1 para cada célula
    const [colorIndexes, setColorIndexes] = React.useState(() => new Array(numX * numY).fill(null)); // cor ou null

    // --- FUNÇÕES DO JOGO ---
    const handleClick = (index) => {
        const column = index % numX;
        const row = Math.floor(index / numY);

        setBloks((prevBloks) =>
            prevBloks.map((value, blokIndex) =>
                blokIndex % numX === column || Math.floor(blokIndex / numY) === row ? 1 - value : value
            )
        );

        setColorIndexes((prevColors) =>
            prevColors.map((color, i) =>
                i % numX === column || Math.floor(i / numY) === row
                    ? prevColors[i] === null
                        ? Math.floor(Math.random() * colorPalette.length)
                        : null
                    : color
            )
        );
    };

    // --- CÁLCULO E MENSAGENS DO JOGO ---
    const scoreNum = bloks.reduce((total, n) => total + n, 0);
    const getProgressMessage = (score) => {
        if (score === 144) return "🎉 Você venceu!";
        if (score >= 108) return "🔥 Está quase lá!";
        if (score >= 72) return "💪 Já passou da metade!";
        if (score >= 36) return "👍 Bom começo!";
        return "";
    };
    const progressMessage = getProgressMessage(scoreNum);

    let scoreClass = styles.scoreLow;
    if (scoreNum >= 108) scoreClass = styles.scoreFinal;
    else if (scoreNum >= 72) scoreClass = styles.scoreHigh;
    else if (scoreNum >= 36) scoreClass = styles.scoreMedium;
    return <>
        <div className={styles.home}>
            <div>
                <h1 className={styles.game}>GRID STRIKE</h1>

                <div className={`${styles.score} ${scoreClass}`}>
                    Score: {scoreNum}/{numX * numY}
                </div>

                {progressMessage && <div className={styles.message}>{progressMessage}</div>}

                <div className={styles.container}>
                    {bloks.map((value, index) => {
                        const blokClass = value === 1 ? "toggle-on" : "toggle-off";
                        return (
                            <Blok
                                key={index}
                                blokClass={blokClass}
                                onClick={() => handleClick(index)}
                                colorIndex={colorIndexes[index]}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    </>
}

export default Game