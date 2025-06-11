// Cria a lógica do jogo

import { useState } from "react";

const numX = 12;
const numY = 12;
const colorPalette = ["#226559", "#266B47"];

document.documentElement.style.setProperty("--numX", numX);

export const useGameLogic = () => {
    const [bloks, setBloks] = useState(() => new Array(numX * numY).fill(0));
    const [colorIndexes, setColorIndexes] = useState(() => new Array(numX * numY).fill(null));

    const handleClick = (index) => {
        const column = index % numX;
        const row = Math.floor(index / numY);

        setBloks((prev) =>
            prev.map((val, i) =>
                i % numX === column || Math.floor(i / numY) === row ? 1 - val : val
            )
        );

        setColorIndexes((prev) =>
            prev.map((color, i) =>
                i % numX === column || Math.floor(i / numY) === row
                    ? color === null
                        ? Math.floor(Math.random() * colorPalette.length)
                        : null
                    : color
            )
        );
    };

    const score = bloks.reduce((acc, val) => acc + val, 0);
    const progressMessage = getProgressMessage(score);

    function getProgressMessage(score) {
        if (score === numX * numY) return "🎉 Você venceu!";
        if (score >= 108) return "🔥 Está quase lá!";
        if (score >= 72) return "💪 Já passou da metade!";
        if (score >= 36) return "👍 Bom começo!";
        return "";
    }

    let scoreLevel = "scoreLow";
    if (score >= 108) scoreLevel = "scoreFinal";
    else if (score >= 72) scoreLevel = "scoreHigh";
    else if (score >= 36) scoreLevel = "scoreMedium";

    return {
        bloks,
        colorIndexes,
        handleClick,
        score,
        progressMessage,
        scoreLevel,
        numTotal: numX * numY
    };
};
